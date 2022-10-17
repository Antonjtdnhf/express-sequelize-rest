const UserService = require('../services/user.service');

exports.getAllUsers = (req, res, next) => {
    const users = UserService.findAllUsers()
        .then((data) => data)
        .catch((err) => {
            next(err);
        });
    if (users) res.status(200).json(users);
};

exports.getUser = (req, res, next) => {
    const { userId } = req.params;
    UserService.findUser(userId)
        .then((user) => {
            if (user) {
                res.status(200).json(user);
            }
            throw new Error('No such user');
        })
        .catch((err) => {
            next(err);
        });
};

exports.deleteUser = (req, res, next) => {
    try {
        const { userId } = req.params;
        const deletionCode = UserService.deleteUser(userId);
        if (+deletionCode) {
            res.status(200).send('User deleted successfully');
        }
        throw new Error(`Could not delete user ${userId}`);
    } catch (err) {
        next(err);
    }
};
