const kue = require('kue');
const queue = kue.createQueue();

queue.process('email', 5, (job, done) => {
    sendEmail(job, done);
});

const sendEmail = (job, done) => {
    emailSender(job.data.name, job.data.email).then((success) => {
        done();
    }).catch((err) => {
        if (400 <= err.status <= 499) {
            job.attempts(0, () => {
                return done(new Error(JSON.stringify(err)));
            });
        }

        return done(new Error(JSON.stringify(err)));
    });
}

const emailSender = (name, email) => {
    return new Promise((resolve, reject) => {
        let responder = Math.floor(Math.random() * 10) + 1;
        console.log("responder: " + responder);

        if (responder < 8) {
            // 7 out of 10 times our request will succeed.
            resolve({
                'success': 'success'
            });
        } else if (responder >= 8 && responder != 10) {
            // 2 out of 10 times our request will failed
            reject({
                'message': "Email was not sent!"
            });
        } else if (responder === 10) {
            // 1 out of 10 times our request will have faulty stuff
            reject({
                'status': 420,
                'message': "You blazed a 420 in your request. Sober down and maybe you will succeed"
            });
        }
    });
}

const badEmailPromise = (name, email) => {
    return new Promise((resolve, reject) => {
        let successful = true;

        if (successful) {
            resolve("Successfully sent the email");
        } else {
            reject("Oops, email sending failed");
        }
    })
}

module.exports = badEmailPromise;