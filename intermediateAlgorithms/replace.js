function myReplace(str, before, after) {
	var re = new RegExp(before,"g");
	return str.replace(,after);
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
