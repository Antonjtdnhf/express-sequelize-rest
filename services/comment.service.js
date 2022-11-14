const { Comment } = require('../models');

class CommentService {
    constructor(model) {
        this.Comment = model;
    }

    createComment(comment) {
        return this.Comment.create(comment)
            .then((newComment) => newComment)
            .catch((err) => {
                throw err;
            });
    }

    findAllComments() {
        return this.Comment.findAll();
    }

    findComment(commentId) {
        return this.Comment.findByPk(commentId)
            .then((comment) => comment)
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    deleteComment(commentId) {
        return this.Comment.destroy({ where: { id: commentId } })
            .then((code) => code)
            .catch((err) => {
                throw new Error(err.message);
            });
    }
}

module.exports = new CommentService(Comment);
