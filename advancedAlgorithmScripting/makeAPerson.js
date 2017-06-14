"use strict";
/* Complete a person object contructor 
*/
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFullName = function() {
        return fullName;
    };

    this.getLastName = function() {
        return fullName.split(' ')[1];
    };

    this.getFirstName = function() {
        return fullName.split(' ')[0];
    };

    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    };

    this.setLastName = function(lastName) {
        fullName = this.getFirstName() + " " + lastName;
    };
    this.setFirstName = function(firstName) {
        fullName = firstName + " " + this.getLastName();
    };

};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob));
bob.setLastName('Barker');
console.log(bob.getFullName());
