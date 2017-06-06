function sym(args) {
	var arg = Array.prototype.slice.call(arguments);
	var newArr = [];

	newArr = diffArgs(arg[0], arg[1]);
	if(args.length > 2) {
		for(var i = 2; i < arg.length; ++i) {
			tempArr = diffArgs(newArr, arg[i]);
			newArr = tempArr;
		}
	}

	function diffArgs(arr1, arr2) {
		var newArr = [];
  
		var a = arr1.filter(function(item){
			return arr2.indexOf(item) < 0;
		});
		var b = arr2.filter(function(item){
			return arr1.indexOf(item) < 0;
		});

		newArr = a.concat(b);
		return newArr.sort();
	}
	newArr = newArr.filter(function(item, index, arr) {
		return arr.indexOf(item) === index;
	});
	return newArr;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
