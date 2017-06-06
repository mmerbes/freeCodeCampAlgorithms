function steamrollArray(arr) {
    var flat = [];
    var pullNum = function(arr, flat) {
        for(var i in arr) {
                if(Array.isArray(arr[i])) {
                    pullNum(arr[i], flat);
                } else {
                    flat.push(arr[i]);
                }
        }
        return flat;
    };
    return pullNum(arr, flat);
}

console.log(steamrollArray([[["a"]], [["b"]]]));