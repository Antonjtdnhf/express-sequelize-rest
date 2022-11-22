const UserRepository = require('../repositories/user.repository');

class UserService {
    #UserRepository = undefined;

    constructor(userRepo) {
        this.#UserRepository = userRepo;
    }

    createUser(user) {
        return this.#UserRepository.createUser(user);
    }

    findAllUsers() {
        return this.#UserRepository.findAllUsers();
    }

    findUser(userId) {
        return this.#UserRepository.findUser(userId);
    }

    deleteUser(userId) {
        return this.#UserRepository.deleteUser(userId);
    }
}

module.exports = new UserService(UserRepository);
