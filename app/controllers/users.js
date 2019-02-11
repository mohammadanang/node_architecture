const models = require('../models');

function getAll() {
    const users = models.user.findAll({
        raw: true
    });
    console.log(users);

    return users;
}

module.exports = {
    getAll
};