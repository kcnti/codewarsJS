var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var newiter = [...iterable]
  console.log(iterable)
  var unique = "";
  var res = []
  newiter.forEach(x => {
    if (x == unique) { return; }
    if (x != unique) {
      res.push(x)
      unique = x
    }
  })
  return res;
}
