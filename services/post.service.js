const PostRepository = require('../repositories/post.repository');

class PostService {
    #PostRepository = undefined;

    constructor(PostRepo) {
        this.#PostRepository = PostRepo;
    }

    createPost(post) {
        return this.#PostRepository.createPost(post);
    }

    findAllPosts() {
        return this.#PostRepository.findAllPosts();
    }

    findPost(postId) {
        return this.#PostRepository.findPost(postId);
    }

    deletePost(postId) {
        return this.#PostRepository.deletePost(postId);
    }
}

module.exports = new PostService(PostRepository);
