const user = require("../models/User");

class userRepository {
    constructor(model) {
        this.model = model;
    }

    create(first, last, age, emailAddress) {
        const newUser = { first, last, age, emailAddress };
        const user = new this.model(newUser);
        return user.save();
    }

    findAll() {
        return this.model.find();
    }
}

module.exports = new userRepository(user);