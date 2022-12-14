'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Comment, PostsHashtags, Hashtag }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
                as: 'user',
            });

            this.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });

            this.belongsToMany(Hashtag, {
                through: PostsHashtags,
                foreignKey: 'postId',
            });
            this.hasMany(PostsHashtags, {
                foreignKey: 'postId',
                as: 'hashtags',
            });
        }
    }
    Post.init(
        {
            content: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [1, 2000],
                        msg: 'Post length must be less than or equal to 2000',
                    },
                },
            },
            userId: { type: DataTypes.UUID },
        },
        {
            sequelize,
            modelName: 'Post',
            tableName: 'Posts',
        },
    );
    return Post;
};
