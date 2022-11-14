'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Hashtag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        static associate({ Post, PostsHashtags }) {
            this.belongsToMany(Post, {
                through: PostsHashtags,
                foreignKey: 'hashtagId',
            });
            this.hasMany(PostsHashtags, {
                foreignKey: 'hashtagId',
                as: 'posts',
            });
        }
    }
    Hashtag.init(
        {
            content: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [1, 30],
                        msg: 'Hashtag length must be less than or equal to 30',
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'Hashtag',
            tableName: 'Hashtags',
        },
    );
    return Hashtag;
};
