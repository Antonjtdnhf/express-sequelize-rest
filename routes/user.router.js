const express = require('express');

const {
    getAllUsers,
    getUser,
    deleteUser,
} = require('../contorllers/user.controller');

const router = express.Router();

router
    .get('/', getAllUsers)
    .get('/:userId', getUser)
    .delete('/:userId', deleteUser);

module.exports = router;
