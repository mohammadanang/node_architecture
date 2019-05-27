const app = module.exports = require('express')();
const badEmail = require('../controllers/emails');
const kue = require('kue');
let queue = kue.createQueue();

app.post('/', function (req, res, next) {
    const emailJob = queue.create('email', {
            name: req.body.name,
            email: req.body.email
        })
        .removeOnComplete(true)
        .attempts(5)
        .backoff({
            delay: 60 * 10,
            type: 'exponential'
        })
        .save();

    emailJob.on('failed', function (errorMessage) {
        console.log('Job Failed');
        let error = JSON.parse(errorMessage);
        console.log(error);
    });

    res.json({
        success: 'Successfully assigned job to the worker'
    });
});

app.get('/', async (req, res) => {
    res.status(200).json({
        code: 200,
        status: 'success',
        message: 'Welcome to the beginning of nothingness'
    });
});

app.use('/api/users', require('./users')); // user routes