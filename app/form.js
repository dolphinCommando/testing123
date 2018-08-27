
class Form {
  constructor() {
    this.userRegEX = '^[a-z]\w+$';
    this.passRegEx = '^\W+$';
  }
  verifyUsername(str) {
    var reg = this.userRegEX;
    var re = new RegExp(reg);
    var matchRE = re.test(str);
    if (matchRE === null) {
      throw new Error('Regex did not match username');
    }
    if (typeof str !== 'string') {
      throw new Error('Strings only');
    }
    if (str === '') {
      throw new Error('Non-empty only');
    }
    if (str.length < 6) {
      throw new Error('Username too short');
    }
    if (str.length > 12) {
      throw new Error('Username too long');
    }

    return 'Username OK'
  };

  verifyPassword(str) {
    var reg = this.passRegEx;
    var re = new RegExp(reg);
    var matchRE = re.test(str);
    if(typeof str !== 'string') {
      throw new Error('Must be a string');
    }
    if (matchRE === null) {
      throw new Error('Regex did not match password');
    }
    if (str === '') {
      throw new Error('Non empty only')
    }
    if (str.length < 8) {
      throw new Error('Password too short');
    }
    if (str.length > 20) {
      throw new Error('Password too long');
    }
    return 'Password OK'; 
  }
  
}


module.exports = Form;