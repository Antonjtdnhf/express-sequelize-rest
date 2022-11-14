const express = require('express');

const {
    getAllUsers,
    getUser,
    deleteUser,
    createUser,
} = require('../contorllers/user.controller');

const router = express.Router();

router
    .get('/', getAllUsers)
    .post('/', createUser)
    .get('/:userId', getUser)
    .delete('/:userId', deleteUser);

module.exports = router;
