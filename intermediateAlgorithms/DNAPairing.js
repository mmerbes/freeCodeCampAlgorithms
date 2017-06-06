function pairElement(str) {
  var pairs = {"G" : ["G", "C"], "C": ["C","G"], "A": ["A", "T"], "T": ["T", "A"]};
  var out = [];
  var nope = str.split('');
  for(var i in nope) {
    out.push(pairs[nope[i]]);
  }
  return out;
}

console.log(pairElement("GCG"));