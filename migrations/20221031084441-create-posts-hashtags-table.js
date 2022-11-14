'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PostsHashtags', {
            postId: {
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'Posts',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            hashtagId: {
                type: Sequelize.UUID,
                references: {
                    model: {
                        tableName: 'Hashtags',
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
        await queryInterface.dropTable('PostsHashtags');
    },
};
