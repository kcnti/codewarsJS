function rowWeights(array){
  //your code here
  var t1 = 0;
  var t2 = 0;
  for(let i=0; i<array.length; i++) {
    if (i%2===0) { t1+=array[i] } else { t2+=array[i] }
  }
  return [t1,t2]
}
