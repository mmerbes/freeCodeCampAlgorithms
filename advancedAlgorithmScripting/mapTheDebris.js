/* Problem 8
Easy peasy. Just need to parse the formula from the wiki article. Nothing much too it.
*/
function orbitalPeriod(arr) {
  for(var i in arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = arr[i].avgAlt + earthRadius;
    var op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a,3) / GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = op;
  }
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
