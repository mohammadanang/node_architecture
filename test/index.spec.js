const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../index');
const server = supertest(app);

describe('test root', () => {
    it('should return success', (done) => {
        server.get('/')
            .expect(200)
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal('success');
                done();
            });
    });
});