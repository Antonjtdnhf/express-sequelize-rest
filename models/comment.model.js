'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Post }) {
            this.belongsTo(User, {
                foreignKey: 'userId',
                as: 'user',
            });
            this.belongsTo(Post, {
                foreignKey: 'postId',
                as: 'post',
            });
        }
    }
    Comment.init(
        {
            content: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [1, 2000],
                        msg: 'Comment length must be less than or equal to 2000',
                    },
                },
            },
            userId: { type: DataTypes.UUID },
            postId: { type: DataTypes.UUID },
        },
        {
            sequelize,
            modelName: 'Comment',
            tableName: 'Comments',
        },
    );
    return Comment;
};
