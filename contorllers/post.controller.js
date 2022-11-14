const PostService = require('../services/post.service');

exports.getAllPosts = (req, res, next) => {
    try {
        PostService.findAllPosts()
            .then((posts) => {
                if (posts) res.status(200).json(posts);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.getPost = (req, res, next) => {
    try {
        const { postId } = req.params;
        PostService.findPost(postId)
            .then((post) => {
                if (!post) {
                    throw new Error('No such post');
                }
                res.status(200).json(post);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.createPost = (req, res, next) => {
    try {
        const { content, userId } = req.body;
        PostService.createPost({ content, userId })
            .then((createdPost) => {
                if (!createdPost) throw new Error('Could not create post');
                res.status(200).json(createdPost);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.deletePost = (req, res, next) => {
    try {
        const { postId } = req.params;
        PostService.deletePost(postId)
            .then((deletionCode) => {
                if (!Number(deletionCode)) {
                    throw new Error(`Could not delete post ${postId}`);
                }
                res.status(200).send('Post deleted successfully');
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};
