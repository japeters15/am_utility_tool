// Requires,
const expect = require('chai').expect;
const debugtl = require('../src/debug.js');
require('mocha-sinon');

// .Env call
process.env.DEBUG = true;

// Tests, starts by calling the API from Models.
describe('debug', () => {

  beforeEach(function() {
    this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'error');
    this.sinon.stub(console, 'warn');
  });

  // Test for Success
  it('Should test for success ', (done) => {
    debugtl.debugSuccess('Success message');
    expect(console.log.calledOnce).to.be.true;
    done();
  });

  /// Test for Error
  it('Should test for error ', (done) => {
    debugtl.debugError('Error message');
    expect(console.error.calledOnce).to.be.true;
    done();
  });

  // Test for Warning
  it('Should test for warning ', (done) => {
    debugtl.debugWarn('Warning message');
    expect(console.warn.calledOnce).to.be.true;
    done();
  });
});
