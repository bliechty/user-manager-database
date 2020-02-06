const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    first: {
        type: String
    },
    last: {
        type: String
    },
    age: {
        type: Number
    },
    emailAddress: {
        type: String
    },
    createdDate: {
        type: String,
        default: new Date().toLocaleString()
    }
});

userSchema.index({first: 1});
const collectionName = "users";
const user = mongoose.model("user", userSchema, collectionName);
module.exports = user;