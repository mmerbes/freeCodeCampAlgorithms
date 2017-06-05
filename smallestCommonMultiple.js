'use strict';
function smallestCommons(arr) {
  var found = false;
  var max = arr.reduce(function(a,b) {
	return Math.max(a,b);
  });
  
  var min = arr.reduce(function(a,b) {
	return Math.min(a,b);
  });
  var i = max;
  var divisible = true;
  while(found===false) {
    divisible = true;
    for(var j = min; j <= max; j++) {
        if(i%j !== 0) {
            divisible = false;
        }
    }
    if(divisible) {
        found = true;
        break;
    } else {
        i++;
    }
  }
  return i;
}

console.log(smallestCommons([1,13]));