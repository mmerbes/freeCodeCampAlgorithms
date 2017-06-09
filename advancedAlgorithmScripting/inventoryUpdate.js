function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    function toObject(arr) {
        return arr.reduce(function(acc, curr) {
            acc[curr[1]] = curr[0];
            return acc;
        },{});
    }
    curI = toObject(arr1);
    newI = toObject(arr2);
    for( var i in newI) {
        if(!curI.hasOwnProperty(i)) {
            curI[i] = newI[i];
        } else {
            curI[i] = (newI[i] + curI[i]);
        }
    }
    var arr = Object.keys(curI).sort().map(function(key) {
        return [curI[key] , key];
    });
    return arr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
var rez = updateInventory(curInv, newInv);
console.log(rez);