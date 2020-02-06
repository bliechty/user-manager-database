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
        this.model.findByIdAndDelete(id, e => {
            if (e) {
                console.log(`Error occurred: ${e}`);
            }
        });
    }

    update(id, first, last, age, emailAddress) {
        const newUser = { first, last, age, emailAddress };
        this.model.findByIdAndUpdate(id, newUser, e => {
            if (e) {
                console.log(`Error occurred: ${e}`);
            }
        });
    }
}

module.exports = new userRepository(user);