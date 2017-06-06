function checkCashRegister(price, cash, cid) {
  var change = [];
  cid = cid.reverse();
  var dict = {
      "ONE HUNDRED" : 100.00,
      "TWENTY" : 20.00,
      "TEN" : 10.00,
      "FIVE" : 5.00,
      "ONE" : 1.00,
      "QUARTER" : 0.25,
      "DIME" : 0.10,
      "NICKEL" : 0.05,
      "PENNY" : 0.01
  };
  var totalLeft = 0;
  var changeDue = cash - price;
  for( var i in cid) {
      var currency = cid[i][0];
      while(changeDue >= dict[currency]) {
        if(changeDue < .1) {
            var temp = Math.round(changeDue / dict[currency]);
        } else {
            var temp = Math.floor(changeDue / dict[currency]);
        }
        var amount = temp*dict[currency];
        console.log(changeDue, dict[currency],  amount);
        if(amount > cid[i][1]) {
           if(cid[i][0] < dict[currency]) {
            break;
           }
           amount = Math.floor(cid[i][1] / dict[currency]) * dict[currency];
           changeDue = changeDue - amount;
           cid[i][1] = (cid[i][1] - amount);
           change.push([ cid[i][0],amount ]);
           break;
        }
        changeDue = changeDue - amount;
        cid[i][1] = (cid[i][1] - amount);
        change.push([ cid[i][0],amount ]);
      }
      totalLeft += cid[i][1];
  }
  console.log(changeDue);
  if( changeDue > 0) {
      return "Insufficient Funds";
  }
  if(totalLeft == 0) {
      return "Closed";
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

var result = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

console.log(result);