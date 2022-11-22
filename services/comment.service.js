const CommentRepository = require('../repositories/comment.repository');

class CommentService {
    #CommentRepository = undefined;

    constructor(commentRepo) {
        this.#CommentRepository = commentRepo;
    }

    createComment(comment) {
        return this.#CommentRepository.createComment(comment);
    }

    findAllComments() {
        return this.#CommentRepository.findAllComments();
    }

    findComment(commentId) {
        return this.#CommentRepository.findComment(commentId);
    }

    deleteComment(commentId) {
        return this.#CommentRepository.deleteComment(commentId);
    }
}

module.exports = new CommentService(CommentRepository);
