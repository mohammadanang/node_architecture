const models = require('../models');

async function getAll(req, res) {
    const users = await models.user.findAll({
        raw: true
    });

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'list users',
        data: users
    });
}

async function getDetail(req, res) {
    const userId = req.params.userId;
    const user = await models.user.findOne({
        where: {
            id: userId
        }
    });

    if (user === null) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'user not found'
        });
    }

    return res.status(200).json({
        code: 200,
        status: 'success',
        message: 'detail user',
        data: user
    });
}

module.exports = {
    getAll,
    getDetail
};