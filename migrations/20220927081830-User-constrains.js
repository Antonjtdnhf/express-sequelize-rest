'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction(async (t) => {
            Promise.all([
                await queryInterface.sequelize.query(
                    `alter table "Users" alter column "createdAt" set not null;`,

                    { transaction: t },
                ),
                await queryInterface.sequelize.query(
                    `alter table "Users" alter column "updatedAt" set not null;`,
                    { transaction: t },
                ),
            ]);
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction(async (t) => {
            Promise.all([
                await queryInterface.sequelize.query(
                    `alter table "Users" alter column "createdAt" drop not null;`,
                    { transaction: t },
                ),
                await queryInterface.sequelize.query(
                    `alter table "Users" alter column "updatedAt" drop not null;`,
                    { transaction: t },
                ),
            ]);
        });
    },
};
