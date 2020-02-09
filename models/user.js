const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    first: String,
    last: String,
    age: Number,
    emailAddress: String,
    createdDate: String
});

const collectionName = "users";
const user = mongoose.model("user", userSchema, collectionName);
module.exports = user;