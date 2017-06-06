function addTogether() {
  var sum;
  var checkNum = function(num) {
    if(Number.isInteger(num)) {
        return num;
    } else {
        return undefined;
    }
  };

  if(arguments.length === 2) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if( b === undefined || a === undefined ) {
        return undefined;
    } else {
        return b + a;
    }
  } else {
      var c = arguments[0];
      if(checkNum(c) === undefined) {
        return undefined;
      }
      return function(args2) {
        if(checkNum(args2) !== undefined && c) {
            return c + args2;
        } else {
            return undefined;
        }
      };
  }
}
console.log(addTogether(2)([3]));