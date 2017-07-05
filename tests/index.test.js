const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect()

chai.use(chaiHttp);

describe('## Basic Test', () => {

    describe('# Home page', () => {
        it('Should return 200', (done) => {
            chai.request('http://localhost:3000')
                .get('/')
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});