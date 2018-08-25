var speak = {};
speak.greeting = function() {
  return 'hello';
}
speak.shout = function(command) {
  if (typeof command !== 'string') {
    throw new Error('string expected');
  }
  command = command.toUpperCase();
  command += '!';
  return command;
}

speak.blacklodge = function(babble) {
  return babble.split(' ').map(element =>
    [...element].reverse().join('')
  ).join(' ');
}
 
module.exports = speak;