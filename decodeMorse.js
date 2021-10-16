decodeMorse = function(morseCode){
  //your code here
  var undef = 0;
  var res = "";
  morseCode.split(' ').forEach(x => {
    if (MORSE_CODE[x] === undefined) { if (undef === 1) { res += ' '; undef = 0; return; } else { undef++; return; } }
    res += MORSE_CODE[x];
  })
  var arr = res.split(' ');
  var final = [];
  arr.forEach(x => {
    if (x === '') {
      return;
    }
    final.push(x)
  })
  return final.join(' ')
}
