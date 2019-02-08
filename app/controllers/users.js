const models = require('../models');

function getAll() {
    const users = models.users.all();

    return users;
}

module.exports = {
    getAll
};