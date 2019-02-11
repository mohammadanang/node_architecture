'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role_users', {
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('role_users');
  }
};