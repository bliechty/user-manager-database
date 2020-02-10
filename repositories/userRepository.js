const user = require("../models/User");

class userRepository {
    constructor(model) {
        this.model = model;
    }

    create(first, last, age, emailAddress) {
        const newUser = {
            first,
            last,
            age,
            emailAddress,
            createdDate: new Date().toLocaleString()
        };
        const user = new this.model(newUser);
        return user.save();
    }

    findAll(category, order) {
        const index = {};
        if (order === "ascending") {
            index[category] = 1;
        } else if (order === "descending") {
            index[category] = -1;
        }
        return this.model.find().sort(index);
    }

    delete(id) {
        this.model.findByIdAndDelete(id, e => {
            if (e) {
                console.log(`Error occurred: ${e}`);
            }
        });
    }

    update(id, first, last, age, emailAddress) {
        const newUser = {
            first,
            last,
            age,
            emailAddress
        };
        this.model.findByIdAndUpdate(id, newUser, e => {
            if (e) {
                console.log(`Error occurred: ${e}`);
            }
        });
    }

    search(searchInput) {
        const regex = new RegExp(searchInput, "i");
        return this.model.find({$or: [
            {first: {$regex: regex}},
            {last: {$regex: regex}},
            {age: {$regex: regex}}
        ]});
    }

    insertMany(userArray) {
        this.model.insertMany(userArray);
    }
}

module.exports = new userRepository(user);