const app = module.exports = require('express')();
const {
    getAll,
    getDetail,
    create
} = require('../controllers').users;

app.post('/', create);
app.get('/', getAll);
app.get('/:userId', getDetail);