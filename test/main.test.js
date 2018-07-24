const main = require('../main');
const should = require('should');

describe('test/main.test.js', function() {
  it('should equal 55 when n === 10', function() {
    main.fibonacci(10).should.equal(55);
  });

  it('should equal 0 when n === 0', function() {
    main.fibonacci(0).should.equal(0);
  });

  it('should equal 1 when n === 1', function() {
    main.fibonacci(1).should.equal(1);
  });

  it('should throw when n > 10', function() {
    (function() {
      main.fibonacci(11);
    }).should.throw('n 必须小于10');
  });

  it('should throw when n < 0', function() {
    (function() {
      main.fibonacci(-1);
    }).should.throw('n 必须大于0');
  });

  it('should throw when n isnt Number', function() {
    (function() {
      main.fibonacci('呵呵');
    }).should.throw('n 必须为数字！');
  });
})