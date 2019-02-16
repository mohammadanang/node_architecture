const models = require('../models');
const helper = require('../helpers/general');

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

async function create(req, res) {
    const user = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: await helper.hashing(req.body.password),
        created_at: new Date(),
        updated_at: new Date()
    });

    if (user === null) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'something wrong'
        });
    }

    return res.status(201).json({
        code: 201,
        status: 'success',
        message: 'user created',
        data: user
    });
}

module.exports = {
    getAll,
    getDetail,
    create
};