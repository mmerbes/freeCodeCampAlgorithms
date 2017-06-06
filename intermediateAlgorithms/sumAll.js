function sumAll(arr) {
	var sum = 0;
	var max = arr.reduce(function(a,b) {
		return Math.max(a,b);
	});
  
	var min = arr.reduce(function(a,b) {
		return Math.min(a,b);
	});
	console.log(min);

	console.log(max);
	for (var i = min; i <= max; i++) {
		sum += i;
	}
  return sum;
}

console.log(sumAll([1, 4]));
