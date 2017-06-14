/* Problem 9: Pairmise problem. 
Given an array arr, find element pairs whose sum equal 
the second argument arg and return the sum of their indices.
Also pretty simple. Just nested for loops and an array to make sure you don't reuse indices. 
*/
function pairwise(arr, arg) {
    var used = [];
    var indexSum = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = i+1; j< arr.length; j++) {
            if(arr[i] + arr[j] == arg) {
                if(used.indexOf(i) === -1 && used.indexOf(j) === -1) {
                    used.push(i,j);
                    indexSum += (i + j);
                }
            }
        }
    }
    return indexSum;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));