function findUniq(arr) {
  // do magic
  var arr = arr.sort()
  return arr.filter(x => x==arr[0]).length > 1 ? arr[arr.length-1] : arr[0]
}
