'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'admin',
      permissions: 'root',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'user',
      permissions: 'user',
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    //
  }
};