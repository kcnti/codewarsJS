function sortArray(array) {
  // Return a sorted array.
  var stackOdd = [];
  var res = [];
  array.forEach(x => {
    if (x%2!=0) { stackOdd.push(x) }
  })
  stackOdd = stackOdd.sort((a,b) => {
    return a-b;
  });
  for(let i=0;i<array.length;i++) {
    if (array[i]%2 != 0) {
      res.push(stackOdd[0]);
      stackOdd.shift();
      continue;
    }
    res.push(array[i])
  }
  return res;
}

