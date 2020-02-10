const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    first: String,
    last: String,
    age: Number,
    emailAddress: String,
    createdDate: String
});

userSchema.index({first: 1, last: 1, age: 1, emailAddress: 1});
const collectionName = "users";
const user = mongoose.model("user", userSchema, collectionName);
module.exports = user;