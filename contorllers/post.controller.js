const PostService = require('../services/post.service');

exports.getAllPosts = (req, res, next) => {
    const posts = PostService.findAllPosts()
        .then((data) => data)
        .catch((err) => {
            next(err);
        });
    if (posts) res.status(200).json(posts);
};

exports.getPost = (req, res, next) => {
    const { postId } = req.params;
    PostService.findPost(postId)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            }
            throw new Error('No such post');
        })
        .catch((err) => {
            next(err);
        });
};

exports.createPost = (req, res, next) => {
    try {
        const { content } = req.body;
        console.log('body', content);
        const createdPost = PostService.createPost({ content });

        if (!createdPost) throw new Error('Could not create post');
        res.status(200).json(createdPost);
    } catch (err) {
        next(err);
    }
};

exports.deletePost = (req, res, next) => {
    try {
        const { postId } = req.params;
        const deletionCode = PostService.deletePost(postId);
        if (+deletionCode) {
            res.status(200).send('Post deleted successfully');
        }
        throw new Error(`Could not delete post ${postId}`);
    } catch (err) {
        next(err);
    }
};
