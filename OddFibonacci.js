function sumFibs(num) {
  var fib = [1,1];
  var apnd = 0;
  do {
      apnd = fib[fib.length-1]+fib[fib.length-2];
      fib.push(apnd);
  }  
  while(apnd < num);
  if(fib[fib.length-1] > num) {
    fib.pop();
  }
  fib = fib.filter(function(item) {
    return item % 2 == 1;
  });
  var sum = fib.reduce(function(acc, cur) {
    return acc+cur;
  });
  console.log(fib);
  return sum;
}

console.log(sumFibs(75025));