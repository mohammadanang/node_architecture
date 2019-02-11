const helper = require('../../app/helpers/general');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert([{
      name: 'Administrator',
      email: 'admin@email.com',
      username: 'admin',
      password: helper.hashing('kiasu123'),
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'John Doe',
      email: 'john@email.com',
      username: 'john',
      password: helper.hashing('kiasu123'),
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete([{
      name: 'Administrator'
    }, {
      name: 'John Doe'
    }]);
  }
};