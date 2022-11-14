const { Post } = require('../models');

class PostService {
    constructor(model) {
        this.Post = model;
    }

    createPost(post) {
        return this.Post.create(post)
            .then((newPost) => newPost)
            .catch((err) => {
                throw err;
            });
    }

    findAllPosts() {
        return this.Post.findAll();
    }

    findPost(postId) {
        return this.Post.findByPk(postId)
            .then((post) => post)
            .catch((err) => {
                throw new Error(err.message);
            });
    }

    deletePost(postId) {
        return this.Post.destroy({ where: { id: postId } })
            .then((code) => code)
            .catch((err) => {
                throw new Error(err.message);
            });
    }
}

module.exports = new PostService(Post);
