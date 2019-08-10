'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dTrees', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      component: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      options: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      trigger: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      types: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isEnd: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dTrees');
  }
};