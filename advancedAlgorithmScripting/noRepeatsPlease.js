/*Return the number of total permutations of the provided string that
 don't have repeated consecutive letters. 
Still can wrap my head around mermutating an array. 
*/
function permAlone(str) {
    var permArr = [],
        usedChars = [];

    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    };
    var permArray = permute(str.split(''));
    var count = 0;
    for(var i in permArr) {
        var tempStr = permArray[i].join('');
        if(!/(.)\1+/.test(tempStr)) {
            count++;
        }
    }
    return count;

};

console.log(permAlone('aab'));