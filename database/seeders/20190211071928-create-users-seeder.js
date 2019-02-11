const helper = require('../../app/helpers/general');
const models = require('../../app/models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let password = await helper.hashing('kiasu123');

    await queryInterface.bulkInsert('users', [{
      name: 'Administrator',
      email: 'admin@email.com',
      username: 'admin',
      password: password,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'John Doe',
      email: 'john@email.com',
      username: 'john',
      password: password,
      created_at: new Date(),
      updated_at: new Date()
    }]);

    let roleAdmin = await models.role.findOne({
      where: {
        name: 'admin'
      }
    });
    let roleUser = await models.role.findOne({
      where: {
        name: 'user'
      }
    });
    let admin = await models.user.findOne({
      where: {
        username: 'admin'
      }
    });
    let user = await models.user.findOne({
      where: {
        username: 'john'
      }
    });

    return await queryInterface.bulkInsert('role_users', [{
      user_id: admin.id,
      role_id: roleAdmin.id
    }, {
      user_id: user.id,
      role_id: roleUser.id
    }]);
  },

  down: (queryInterface, Sequelize) => {
    //
  }
};