function uniteUnique(arr) {
    var union = [];
    for(var i = 0; i < arguments.length; i++) {
        union = union.concat(arguments[i]);
    }
    union = union.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    });
    return union;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));