'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Post, Comment, Role, RolesUsers }) {
            this.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
            this.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
            this.belongsToMany(Role, {
                through: RolesUsers,
                foreignKey: 'roleId',
            });
            this.hasMany(RolesUsers, { as: 'roles' });
        }
    }
    User.init(
        {
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        domain_specific_validation: false,
                        msg: 'Please enter a valid email address',
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [6, 42],
                        msg: 'Please enter a valid password',
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'Users',
        },
    );

    return User;
};
