'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RolesUsers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Role }) {
            this.belongsTo(User, {
                foreignKey: 'users',
            });
            this.belongsTo(Role, {
                foreignKey: 'roles',
            });
        }
    }
    RolesUsers.init(
        {
            userId: DataTypes.UUID,
            roleId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'RolesUsers',
            tableName: 'rolesUsers',
        },
    );
    return RolesUsers;
};
