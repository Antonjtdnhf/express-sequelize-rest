const app = require('express');

const {
    getAllPosts,
    getPost,
    deletePost,
    createPost,
} = require('../contorllers/post.controller');

const router = app.Router();

router
    .get('/', getAllPosts)
    .post('/', createPost)
    .get('/:postId', getPost)
    .delete('/:postId', deletePost);

module.exports = router;
