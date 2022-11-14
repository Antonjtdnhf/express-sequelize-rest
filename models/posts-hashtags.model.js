'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PostsHashtags extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Hashtag, Post }) {
            this.belongsTo(Post, {
                foreignKey: 'postId',
                // as: 'post',
            });
            this.belongsTo(Hashtag, {
                foreignKey: 'hashtagId',
                // as: 'hashtag',
            });
        }
    }
    PostsHashtags.init(
        {
            postId: DataTypes.UUID,
            hashtagId: DataTypes.UUID,
        },
        {
            sequelize,
            modelName: 'PostsHashtags',
            tableName: 'PostsHashtags',
        },
    );
    return PostsHashtags;
};
