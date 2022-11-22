const { Post } = require('../models');

class PostRepository {
    #PostModel = undefined;

    constructor(PostModel) {
        this.#PostModel = PostModel;
    }

    createPost(post) {
        return this.#PostModel.create(post);
    }

    findAllPosts() {
        return this.#PostModel.findAll();
    }

    findPost(postId) {
        return this.#PostModel.findByPk(postId);
    }

    deletePost(postId) {
        return this.#PostModel.destroy({ where: { id: postId } });
    }
}

module.exports = new PostRepository(Post);
