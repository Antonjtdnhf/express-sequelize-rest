const { User } = require('../models');

class UserService {
    constructor(model) {
        this.User = model;
    }

    createUser(user) {
        return this.User.create(user);
    }

    findAllUsers() {
        return this.User.findAll();
    }

    findUser(userId) {
        return this.User.findByPk(userId);
    }

    deleteUser(userId) {
        return this.User.destroy({ where: { id: userId } });
    }
}

module.exports = new UserService(User);
