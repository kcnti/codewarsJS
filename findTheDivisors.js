function divisors(integer) {
  var isprime = 0;
  var primeArr = []
  for (let i=2; i < integer; i++) {
    if (integer%i == 0) { 
      isprime=1;
      primeArr.push(i);
    }
  }
  return isprime ? primeArr : `${integer} is prime`;
};
