'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
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
        },
        {
            sequelize,
            modelName: 'Post',
        },
    );
    return Post;
};
