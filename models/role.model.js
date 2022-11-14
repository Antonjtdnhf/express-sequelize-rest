'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ RolesUsers, User }) {
            this.belongsToMany(User, {
                through: RolesUsers,
                foreignKey: 'userId',
            });
            this.hasMany(RolesUsers, { as: 'users' });
        }
    }
    Role.init(
        {
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Role',
            tableName: 'Roles',
        },
    );
    return Role;
};
