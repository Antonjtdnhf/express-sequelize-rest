'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) =>
            Promise.all([
                queryInterface.sequelize.query(
                    `
        
                    drop extension if exists "uuid-ossp";
        `,
                    { transaction: t },
                ),
                queryInterface.sequelize.query(
                    `
        create extension if not exists "uuid-ossp";
        `,
                    { transaction: t },
                ),
                queryInterface.createTable(
                    'Users',
                    {
                        id: {
                            type: Sequelize.UUID,
                            allowNull: false,
                            primaryKey: true,
                            defaultValue:
                                Sequelize.literal('uuid_generate_v4()'),
                        },
                        email: {
                            type: Sequelize.STRING,
                            allowNull: false,
                            unique: true,
                        },
                        password: {
                            type: Sequelize.STRING,
                            allowNull: false,
                        },
                        createdAt: {
                            type: Sequelize.DATE,
                            allowNull: false,
                            defaultValue: Sequelize.NOW,
                        },
                        updatedAt: {
                            type: Sequelize.DATE,
                            allowNull: false,
                            defaultValue: Sequelize.NOW,
                        },
                    },
                    { transaction: t },
                ),
            ]),
        );
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) =>
            Promise.all([
                queryInterface.dropTable('Users', { transaction: t }),
                queryInterface.sequelize.query(
                    `
        drop extension if exists "uuid-ossp";
        `,
                    { transaction: t },
                ),
            ]),
        );
    },
};
