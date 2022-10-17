const { User } = require('../models');

class UserService {
    constructor(model) {
        this.User = model;
    }

    createUser(user) {
        return this.User.create(user)
            .then((newUser) => newUser)
            .catch((err) => {
                throw err;
            });
    }

    async findAllUsers() {
        return this.User.findAll();
    }

    findUser(userId) {
        return this.User.findByPk(userId)
            .then((user) => user)
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    deleteUser(userId) {
        return this.User.destroy({ where: { id: userId } })
            .then((code) => code)
            .catch((err) => {
                throw new Error(err.message);
            });
    }
}

module.exports = new UserService(User);
