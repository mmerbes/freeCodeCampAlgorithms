function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');
  var start = alphabet.indexOf(str[0]);
  for(var i = 0; i < str.length; i++) {
    if(str[i] != alphabet[start+i]) {
      console.log('wat');
      return alphabet[start+i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("bcd"));
