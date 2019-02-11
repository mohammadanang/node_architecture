const app = module.exports = require('express')();
const {
    getAll
} = require('../controllers').users;

app.get('/', (req, res) => {
    getAll()
        .then((data) => {
            res.status(200).json({
                code: 200,
                status: 'success',
                message: 'list users',
                data: data
            });
        })
        .catch((err) => {
            res.status(400).json({
                code: 400,
                status: 'error',
                message: err
            });
        });
});