
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.charAt(0).toLowerCase() + str.slice(1);
  str=str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str=str.replace(/_/g,"-").toLowerCase();
  str=str.replace(/\s/g,"-").toLowerCase();
  return str;
}

console.log(spinalCase('AllThe-small Things'));