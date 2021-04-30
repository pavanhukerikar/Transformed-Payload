const chai = require('chai'),
chaiHttp = require('chai-http'),
server = require('../index'),
/* faker = require('faker'), */
should = chai.should();
 
chai.use(chaiHttp);
// check at the time of app init
describe('Init', function () {
// this test case is used to check app is running or not
it('check app status', function (done) {
  chai.request(server).get('/').end((err, res) => {
    should.not.exist(err);
    res.should.have.status(200);
    done();
  })
});
});
// payload post api test cases
describe('/POST API test', function () {
    // dummy payload
    const payloadBody = {
        "payload": {
          "name": "subscriber",
          "valueType": "array",
          "value": [
          ]
        },
        "referenceData": {
          "REF_MSISDN": "0406679321",
          "REF_IMSI": "50002312344314",
          "REF_SERVPROFID": "2"
        }
    };
    // nigative test cases
    it('Check the api without parameters.Failure / Nigative test cases case', function (done) {
      chai.request(server).post('/payload').send({}).end((err, res) => {
        should.not.exist(err);
        res.should.have.status(400);
        res.body.should.have.property('message');
        res.body.should.have.property('message').eql('Please enter payload & refdata');
        done();
      })
    });
    //positive test cases
    it('Check the API with valid parameters. Success / Possitive test cases', function (done) { 
      chai.request(server).post('/payload').send(payloadBody).end((err, res) => { 
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('valueType');
        done();
      })
    });
  });
   