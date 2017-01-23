// Requires,
const expect = require('chai').expect;
require('mocha-sinon');
const debugtl = require('../src/debug.js');


// Tests, starts by calling the API from Models.
describe('debug', () => {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'error');
    this.sinon.stub(console, 'warn');
  });

  // Test for Success
  it('Should test for success ', (done) => {
    // var tst = 'log';
    process.env.DEBUG = true;
    debugtl.debugSuccess('Success message');
    expect(console.log.calledOnce).to.be.true;
    done();
  });

  /// Test for Error
  it('Should test for error ', (done) => {
    // var tst = 'error';
    process.env.DEBUG = true;
    debugtl.debugError('Error message');
    expect(console.error.calledOnce).to.be.true;
    done();
  });

  // Test for Warning
  it('Should test for warning ', (done) => {
    // var tst = 'warn';
    process.env.DEBUG = true;
    debugtl.debugWarn('Warning message');
    expect(console.warn.calledOnce).to.be.true;
    done();
  });
});
