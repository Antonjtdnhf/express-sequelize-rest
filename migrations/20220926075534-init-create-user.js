'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    async up(queryInterface, Sequelize) {
        // await queryInterface.sequelize.transaction(async (t) => {
        //     await Promise.all([
        //         await queryInterface.sequelize.query(
        //             `
        // create extension if not exists "uuid-ossp";
        // `,
        //             { transaction: t },
        //         ),
        //         await queryInterface.sequelize.query(
        //             `
        // create table "Users" (
        // "id" uuid primary key default uuid_generate_v4(),
        // "email" varchar(255) not null unique,
        // "password" varchar(255) not null,
        // "createdAt" TIMESTAMP default current_timestamp,
        // "updatedAt" TIMESTAMP default current_timestamp
        // )
        // `,
        //             { transaction: t },
        //         ),
        //     ]);
        // });
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
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
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
