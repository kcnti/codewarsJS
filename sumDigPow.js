function sumDigPow(a, b) {
  // Your code here
  var res = [];
  for(a; a <= b; a++){
    digits = String(a).split('');
    if(a == digits.reduce(function(i, j, k){
      return i + j**(k+1);
    }, 0)){
      res.push(a);
    }
  }
  return res;
}
