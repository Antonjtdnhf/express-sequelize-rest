'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('RolesUsers', {
            userId: {
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'Users',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Roles',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('RolesUsers');
    },
};
