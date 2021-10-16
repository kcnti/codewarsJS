function deleteNth(arr, x){
  return arr.reduce(function(a, b){
    return a.filter(i => i==b).length < x ? a.concat(b) : a;
  }, []);
}
