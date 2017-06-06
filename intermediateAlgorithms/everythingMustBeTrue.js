function truthCheck(collection, pre) {
  // Is everyone being true?
  var bool = true;
  collection.forEach(function(item) {
      if(!item[pre]) {
        bool = false;
      } 
      console.log(item[pre]);
  }, this);
  return bool;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
            {"user": "Dipsy", "sex": "male"}, 
            {"user": "Laa-Laa", "sex": "female"}, 
            {"user": "Po", "sex": "female"}], "sex");