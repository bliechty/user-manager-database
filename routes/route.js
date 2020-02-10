const express = require("express");
const app = express.Router();
const repository = require("../repositories/userRepository");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/userList", (req, res) => {
    const cookies = checkForCategoryAndOrder(req.cookies);
    const category = cookies.category;
    const order = cookies.order;
    repository.findAll(category, order).then(users => {
        res.render("usersList", {users, category, order});
    }).catch(e => {
        console.log(`Error occurred: ${e}`);
    });
});

app.post("/userList", (req, res) => {
    const searchInput = req.body["search-input"];
    let category;
    let order;
    if (searchInput === undefined) {
        category = req.body["user-category"];
        order = req.body["user-order"];
        res.cookie("category", category);
        res.cookie("order", order);
        repository.findAll(category, order).then(users => {
            res.render("usersList", {users, category, order});
        }).catch(e => {
            console.log(`Error occurred: ${e}`);
        });
    } else {
        const cookies = checkForCategoryAndOrder(req.cookies);
        category = cookies.category;
        order = cookies.order;
        if (!/\\/.test(searchInput) &&
            !/\|/.test(searchInput) &&
            !/\+/.test(searchInput) &&
            !/\?/.test(searchInput) &&
            !/\./.test(searchInput) &&
            searchInput !== "") {
            repository.search(searchInput).then(users => {
                res.render("usersList", {users, category, order, searched: true});
            }).catch(e => {
                console.log(`Error occurred: ${e}`);
            });
        } else {
            res.render("usersList", {users: [], category, order, searched: true});
        }
    }
});

app.get("/createUser", (req, res) => {
    res.render("createUser");
});

app.post("/createUser", (req, res) => {
    if (
        req.body["first-name"] === "" || req.body["last-name"] === "" ||
        req.body["email-address"] === "" || req.body["age"] === ""
    ) {
        res.render("error", {message: "Inputs cannot be blank"});
    } else if (req.body["age"] <= 0) {
        res.render("error", {message: "Age has to be greater than 0"});
    } else {
        repository.create(
            req.body["first-name"],
            req.body["last-name"],
            req.body["age"],
            req.body["email-address"]
        ).then(() => {
            res.redirect("/userList");
        }).catch(e => {
            console.log(`Error occurred: ${e}`);
        });
    }
});

app.get("/deleteUser/:userId", (req, res) => {
    repository.delete(req.params.userId);
    res.redirect("/userList");
});

app.get("/userList/:userId", (req, res) => {
    repository.findAll().then(users => {
        const user = users.filter(user => String(user._id) === req.params.userId)[0];
        if (user) {
            res.render("editUser", {user});
        } else {
            res.render("error", {message: "That user does not exist"});
        }
    }).catch(e => {
        console.log(`Error occurred: ${e}`);
    });
});

app.post("/userList/:userId", (req, res) => {
    if (
        req.body["first-name"] === "" || req.body["last-name"] === "" ||
        req.body["email-address"] === "" || req.body["age"] === ""
    ) {
        res.render("error", {message: "Inputs cannot be blank"});
    } else if (req.body["age"] <= 0) {
        res.render("error", {message: "Age has to be greater than 0"});
    } else {
        repository.update(
            req.params.userId,
            req.body["first-name"],
            req.body["last-name"],
            req.body["age"],
            req.body["email-address"]
        );
        res.redirect("/userList");
    }
});

function checkForCategoryAndOrder(cookies) {
    if (cookies.category === undefined &&
        cookies.order === undefined) {
        return {
            category: "_id",
            order: "ascending"
        };
    } else {
        return {
            category: cookies.category,
            order: cookies.order
        };
    }
}

module.exports = app;