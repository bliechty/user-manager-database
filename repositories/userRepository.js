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

    delete(id) {
        this.model.findByIdAndDelete(id, (e, user) => {
            if (e) {
                console.log(`Error occurred: ${e}`);
            }
        });
    }
}

module.exports = new userRepository(user);