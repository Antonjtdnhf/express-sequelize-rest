const UserService = require('../services/user.service');

exports.getAllUsers = (req, res, next) => {
    try {
        UserService.findAllUsers()
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((err) => {
                throw err;
            });
    } catch (err) {
        next(err);
    }
};

exports.createUser = (req, res, next) => {
    try {
        const { email, password } = req.body;
        UserService.createUser({ email, password })
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        console.log('333333333333333333', err);
        next(err);
    }
};

exports.getUser = (req, res, next) => {
    try {
        const { userId } = req.params;
        UserService.findUser(userId)
            .then((user) => {
                if (!user) {
                    throw new Error('No such user');
                }
                res.status(200).json(user);
            })
            .catch((err) => {
                throw err;
            });
    } catch (err) {
        next(err);
    }
};

exports.deleteUser = (req, res, next) => {
    try {
        const { userId } = req.params;
        UserService.deleteUser(userId)
            .then((code) => {
                if (!Number(code)) {
                    throw new Error(`Could not delete user ${userId}`);
                }
                res.status(200).send('User deleted successfully');
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};
