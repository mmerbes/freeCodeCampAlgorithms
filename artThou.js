function whatIsInAName(collection, source) {
	var arr = [];
	var keys = Object.keys(source);
	
	arr = collection.filter( function(item) {
		for( var key in keys) {
			if(item.hasOwnProperty(keys[key])){
				if(item[keys[key]] != source[keys[key]]) {
					return false;
				}
			} else {
				return false;
			}
		}
		return true;
	});
	                 
	return arr;
}
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
