
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/[A-Z]/g, "-$&");
  str=str.replace(/\s/g,"-").toLowerCase();
  return str;
}

console.log(spinalCase('thisIsSpinalTap'));