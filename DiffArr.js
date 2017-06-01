function diffArray(arr1, arr2) {
	var newArr = [];
  
	var a = arr1.filter(function(item){
		return arr2.indexOf(item) < 0;
	});
	var b = arr2.filter(function(item){
		return arr1.indexOf(item) < 0;
	});

	newArr = a.concat(b);
	return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
