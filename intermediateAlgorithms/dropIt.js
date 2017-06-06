//Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

function dropElements(arr, func) {
  // Drop them elements.
  var search = arr.filter(func);
  if(search.length > 0) {
  return arr.slice(arr.indexOf(search[0]));
  } else {
      return [];
  }
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; }));
