module.exports = {
  verifyUsername: function(str) {
    var re = new RegExp(this.getUsernameRegEx());
    var matchRE = re.match(str);
    if (matchRE === null) {
      return new Error('Regex did not match username');
    }
    else if (str.length < 6 || str.length > 12) {
      return new Error('Username too short or too long');
    }
    else {
      return 'Username OK';
    }
  },
  verifyPassowrd: function(str) {
    var re = new RegExp(this.getPasswordRegEx());
    var matchRE = re.match(str);
    if (matchRE === null) {
      return new Error('Regex did not match password');
    }
    else if (str.length < 8 || str.length > 20) {
      return new Error('Password too short or too long');
    }
    else {
      return 'Password OK';
    }
  },
  getUsernameRegEx: function() {
    return '^[a-z]\w+$';
  },
  getPasswordRegEx: function() {
    return '^\W+&';
  }
}