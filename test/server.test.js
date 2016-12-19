var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/presentation/server');
var should = chai.should();

chai.use(chaiHttp);

describe('Server', function() {
  it('should say Hello World on / GET', (done) => {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});