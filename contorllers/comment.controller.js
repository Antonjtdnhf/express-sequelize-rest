const CommentService = require('../services/comment.service');

exports.getAllComments = (req, res, next) => {
    try {
        CommentService.findAllComments()
            .then((comments) => {
                if (comments) res.status(200).json(comments);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.getComment = (req, res, next) => {
    try {
        const { commentId } = req.params;
        CommentService.findComment(commentId)
            .then((comment) => {
                if (!comment) {
                    throw new Error('No such comment');
                }
                res.status(200).json(comment);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.createComment = (req, res, next) => {
    try {
        const { content, userId, postId } = req.body;
        CommentService.createComment({ content, userId, postId })
            .then((createdComment) => {
                if (!createdComment)
                    throw new Error('Could not create comment');
                res.status(200).json(createdComment);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};

exports.deleteComment = (req, res, next) => {
    try {
        const { commentId } = req.params;
        CommentService.deleteComment(commentId)
            .then((deletionCode) => {
                if (!Number(deletionCode)) {
                    throw new Error(`Could not delete comment ${commentId}`);
                }
                res.status(200).send('Comment deleted successfully');
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
};
