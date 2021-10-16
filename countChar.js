function count (string) {  
  var obj = {};
  string = string.split('').forEach(function(x){
    obj[x] = obj[x] ? obj[x] + 1 : 1;
  });
  return obj;
}

function count (string) {
  // The function code should be here
  var alreadyCount = [];
  var result = {};
  for (var chr of string) {
    if (alreadyCount.includes(chr)) {
      result[chr] = result[chr] + 1;
    } else {
      result[chr] = 1;
      alreadyCount.push(chr);
    }
  }
  console.log(result, alreadyCount);
  return result;
}
