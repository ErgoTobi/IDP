'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scenarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      mode: {
        type: Sequelize.STRING
      },
      route: {
        type: Sequelize.STRING
      },
      runQuantity: {
        type: Sequelize.INTEGER
      },
      faultInjectionTime: {
          type: Sequelize.STRING
      },
      file: {
          type: Sequelize.TEXT
      },
      filePath: {
          type: Sequelize.STRING
      },
      ecuAmount: {
          type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      testsetId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'testsets',
            key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('scenarios');
  }
};