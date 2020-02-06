const express = require("express");
const app = express.Router();
const repository = require("../repositories/userRepository");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/userList", (req, res) => {
    repository.findAll().then(users => {
        res.render("usersList", {users});
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
    res.redirect("/userList");
});

module.exports = app;