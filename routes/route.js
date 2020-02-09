const express = require("express");
const app = express.Router();
const repository = require("../repositories/userRepository");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/userList", (req, res) => {
    let category = "";
    let order = "";
    if (Object.keys(req.query).length !== 0) {
        category = req.query.category;
        order = req.query.order;
    } else {
        category = "_id";
        order = "ascending";
    }
    repository.findAll(category, order).then(users => {
        res.render("usersList", {users, category, order});
    }).catch(e => {
        console.log(`Error occurred: ${e}`);
    });
});

app.post("/userList", (req, res) => {
    const category = req.body["user-category"];
    const order = req.body["user-order"];
    repository.findAll(category, order).then(users => {
        res.render("usersList", {users, category, order});
    }).catch(e => {
        console.log(`Error occurred: ${e}`);
    });
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
    res.redirect(`/userList?category=${req.query.category}&order=${req.query.order}`);
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
        res.redirect(`/userList?category=${req.query.category}&order=${req.query.order}`);
    }
});

module.exports = app;