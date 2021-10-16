function toWeirdCase(string){
  //TODO
  string = string.split(' ')
  var res = "";
  string.forEach(x => {
    for(let i=0;i<x.length;i++) {
      if (i%2==0) { res+=[...x][i].toUpperCase(); } else { res+=[...x][i].toLowerCase() }
    }
    if (string.indexOf(x) != string.length-1) { res+=' '; }
  })
  return res;
}
