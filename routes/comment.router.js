const app = require('express');

const {
    getAllComments,
    getComment,
    deleteComment,
    createComment,
} = require('../contorllers/comment.controller');

const router = app.Router();

router
    .get('/', getAllComments)
    .post('/', createComment)
    .get('/:commentId', getComment)
    .delete('/:commentId', deleteComment);

module.exports = router;
