'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('city', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('city');
    },
};
