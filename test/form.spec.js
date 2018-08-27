const assert = require('chai').assert;
var Form = require('../app/form');
var form = new Form();
describe('Form', function() {
  describe('#verifyUsername()', function() {
    it('should not accept empty string', function() {
      assert.throws(() => form.verifyUsername(''));
    });
    it('should not accept non-string', function() {
      assert.throws(() => form.verifyUsername(123));
      assert.throws(() => form.verifyUsername(['string']));
      assert.throws(() => form.verifyUsername({string: 'string'}));
    })
    
    it('should not accept strings length < 6', function() {
      assert.throws(() => form.verifyUsername('penta'))
    });
    it('should not accept strings length > 12', function(){
      assert.throws(() => form.verifyUsername('spacewizard421'));
    })
    it('should accept this username', function() {
      assert.isOk(form.verifyUsername('sanitycheck'));
    })
  })
  describe('#verifyPassword()', function() {
    it('should not accept empty string', function() {
      assert.throws(() => form.verifyPassword(''));
    });
    it('should not accept non-string', function() {
      assert.throws(() => form.verifyPassword(123));
      assert.throws(() => form.verifyPassword(['string']));
      assert.throws(() => form.verifyPassword({string: 'string'}));
    })
    it('should not accept strings length < 8', function() {
      assert.throws(() => form.verifyPassword('passwoo'));
    })
    it('should not accept strings length > 20', function() {
      assert.throws(() => form.verifyPassword('rickandmortyistoosmart4U'));
    })
    it('should accept this password', function() {
      assert.isOk(form.verifyPassword('mochaChai820'));
    })
  })
  
  describe('#getUsernameRegEx()', function() {
    it('should have this regex', function() {
      assert.equal(form.userRegEX, '^[a-z]\w+$');
    })
  })
  describe('#getPasswordRegEx()', function() {
    it('should have this regex', function() {
      assert.equal(form.passRegEx, '^\W+$');
    })
  })
})

