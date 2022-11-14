require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('./test1');
const db = require('./models/index');
const postRouter = require('./routes/post.router');
const userRouter = require('./routes/user.router');
const commentRouter = require('./routes/comment.router');
const { errorHandler } = require('./middleware/error-handler');
const UserService = require('./services/user.service');
const PostService = require('./services/post.service');

const app = express();
const PORT = process.env.API_PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.set("view", "view");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

app.get('/123', async (req, res, next) => {
    const newPost = await PostService.createPost({ content: 'application' });
    const newHash = await db.Hashtag.create({ content: '#23hashtah' });
    await newHash.addPost(newPost);

    return await PostService.findPost();
    // console.log('333333333333', newPost[0], newHash);
    // UserService.createUser({
    //     email: 'email3s@email.com',
    //     password: 'password',
    // })
    //     .then(() => UserService.findAllUsers())
    //     .then((users) => res.send(users))
    //     .catch((err) => next(err));
    // PostService.createPost({
    //     content: 'application',
    //
    //     Hashtags: [
    //         {
    //             content: 'hashtag',
    //             PostsHashtags: {
    //                 a: 'b',
    //             },
    //         },
    //     ],
    // });
    // UserService.findUser('5e398fe6-afeb-4f22-b530-88091e02ac18')
    //     .then((user) =>
    //         user.createPost(
    //             {
    //                 content: 'Hello23',
    //             },
    //             // {
    //             //     content: 'content',
    //             //     comments: [{ content: 'comment1' }],
    //             // },
    //             // { include: ['comments', 'postsHashtags'] },
    //         ),
    //     )
    //     .then(
    //         (post) =>
    //             new Promise((resolve, reject) => {
    //                 db.Hashtag.create({ content: '#first2' }).then((hashtag) =>
    //                     resolve({ post, hashtag }),
    //                 );
    //             }),
    //     )
    //     .then(({ post, hashtag }) => post.addHashtag(hashtag))
    //     .then((data) => res.send(data))
    //     .catch((err) => next(err));
    // db.Post.findByPk('b41c2201-537f-440e-9343-b8071d04a1b0', {
    //     include: ['postsHashtags'],
    // }).then((data) => res.json(data));
    // res.sendFile(path.join(__dirname, 'view/index.html')))
});
app.get('/1234', (req, res, next) => {
    // db.Post.create({
    //     content: 'bla-bla',
    //     hashtag: [{ content: 'hash1' }, { content: 'hash2' }],
    // })
    //     .then((data) => console.log(data))
    //     // .then((post) => res.send(post))
    //     .catch((err) => next(err));
    // PostService.createPost({
    //     content: 'test content',
    //     userId: '830189ff-a4fc-43b8-8c2b-5cf1484e21db',
    // })
    //     .then((post) => res.send(post))
    //     .catch((err) => next(err));
    // res.sendFile(path.join(__dirname, 'view/index.html')))
});
app.get('/1', async (req, res, next) => {
    try {
        const User = await db.User.findAll({
            where: { id: '5eb093a8-e44c-4f1d-8433-4538fc286a98' },
            include: [
                {
                    association: 'posts',
                    include: { association: 'comments' },
                },
            ],
        });
        res.json(User);
    } catch (err) {
        next(err);
    }
    // const posts = await User[0].getPost();
    // console.log(posts);
    // db.User.findAll({
    //     where: { id: '6488a81f-d0a7-474f-a1e8-55e64e02bae8' },
    //     include: 'post',
    // })
    //     .then((response) => {
    //         console.log('12312312', response);
    //         response.getPost();
    //         // .then((post) => console.log('1111111111111111111111', post));
    //         res.json(response);
    //     })
    //     .catch((err) => next(err));
    // res.sendFile(path.join(__dirname, 'view/index.html')))
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at ${PORT} port`));
