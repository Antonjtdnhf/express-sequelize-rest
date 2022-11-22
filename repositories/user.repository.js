const { User } = require('../models');

class UserRepository {
    #UserModel = undefined;

    constructor(UserModel) {
        this.#UserModel = UserModel;
    }

    createUser(user) {
        return this.#UserModel.create(user);
    }

    findAllUsers() {
        return this.#UserModel.findAll();
    }

    findUser(userId) {
        return this.#UserModel.findByPk(userId);
    }

    deleteUser(userId) {
        return this.#UserModel.destroy({ where: { id: userId } });
    }
}

module.exports = new UserRepository(User);
