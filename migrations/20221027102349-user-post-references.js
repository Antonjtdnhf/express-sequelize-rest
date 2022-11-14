'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.addColumn('Posts', 'userId', {
            type: Sequelize.UUID,
            references: {
                model: {
                    tableName: 'Users',
                },
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
    },

    down(queryInterface, Sequelize) {
        return queryInterface.removeColumn('Posts', 'userId');
    },
};
