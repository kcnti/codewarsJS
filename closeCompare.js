function closeCompare(a, b, margin = 0){
  // ...
  return Math.abs(a-b) <= margin ? 0 : a > b ? 1 : -1;
}


function closeCompare(a, b, margin){
  var distance = Math.abs(a-b);
  var margin = margin === undefined ? 0 : margin;
  if (margin >= distance) {
    return 0
  } else {
    return (a > b ? 1 : -1)
  }
}
