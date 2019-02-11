const app = module.exports = require('express')();
const {
    getAll,
    getDetail
} = require('../controllers').users;

app.get('/', getAll);
app.get('/:userId', getDetail);