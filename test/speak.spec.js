const assert = require('chai').assert;
var speak = require('../app/speak');

describe('Speak', function() {
  it('should be object', function() {
    assert(typeof speak, true);
  })
  describe('#greeting()', function() {
    it('should return hello', function() {
      assert.equal(speak.greeting(), 'hello')
    });
  });
  describe('#shout()', function() {
    it('should take string', function() {
      assert.isString(speak.shout('yeet'));
    });
    it('should throw error if not string', function() {
      assert.throws(() => speak.shout(21));
    });
    it('should return ALL CAPS', function() {
      assert.equal(speak.shout('deez nuts'), 'DEEZ NUTS!');
    });
    it('should all exclamation point!', function() {
      assert.equal(speak.shout('happy birthday'), 'HAPPY BIRTHDAY!');
    })
  })
  describe('#blacklodge()', function() {
    it('should exist', function() {
      assert.exists(speak.blacklodge);
    });
    it('should return backwards string', function() {
      assert.equal(speak.blacklodge('microcassette'), 'ettessacorcim')
    });
    it('should return backwards words in sentence', function() {
      var strA = 'damn fine cup of coffee';
      var strB = 'nmad enif puc fo eeffoc';
      assert.equal(speak.blacklodge(strA), strB);
    });
  })
  
})