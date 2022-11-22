const { Comment } = require('../models');

class CommentRepository {
    #CommentModel = undefined;

    constructor(CommentModel) {
        this.#CommentModel = CommentModel;
    }

    createComment(comment) {
        return this.#CommentModel.create(comment);
    }

    findAllComments() {
        return this.#CommentModel.findAll();
    }

    findComment(commentId) {
        return this.#CommentModel.findByPk(commentId);
    }

    deleteComment(commentId) {
        return this.#CommentModel.destroy({ where: { id: commentId } });
    }
}

module.exports = new CommentRepository(Comment);
