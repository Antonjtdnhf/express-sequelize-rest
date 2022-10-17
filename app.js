require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('./test1');
const post = require('./routes/post.router');
const user = require('./routes/user.router');
const { errorHandler } = require('./middleware/errorHandler');
const UserService = require('./services/user.service');

const app = express();
const PORT = process.env.API_PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.set("view", "view");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/posts', post);
app.use('/api/users', user);

app.get('/123', (req, res, next) => {
    UserService.createUser({
        email: 'email3@email.com',
        password: 'password',
    })
        .then(() => UserService.findAllUsers())
        .then((users) => res.send(users))
        .catch((err) => next(err));

    // res.sendFile(path.join(__dirname, 'view/index.html')))
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at ${PORT} port`));
