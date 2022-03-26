// Import stylesheets
import './style.css';

// ***********************************************
// Object references and copying
// Source: https://javascript.info/object-copy
// ***********************************************

//Primitive Values
// ***********************************************

let message = 'Hello!';
let greet = message;
console.log(message); //Hello!
console.log(greet); //Hello!

greet = 'Bye Bye!';
console.log(message); //Hello! -> message is not changed
console.log(greet); //Bye Bye! ->Only the greet is changed.

//Objects
// ***********************************************

// Objects are not like that.
let user = {
  name: 'Nistar',
};

// object (eg. name: 'Nistar') is stored somewhere in memory
// but the variable (eg 'user') has a reference to object.

let admin = user; // copy the reference

//Two variables ( user and admin), store a reference to the same object

console.log(user.name); //Nistar
console.log(admin.name); //Nistar

admin.name = 'Peter'; //changed by the 'admin' reference

console.log(user.name); //Peter ->changes are seen from the "user" reference

console.log(admin.name); //Peter

// It’s as if we had a cabinet with two keys(user and admin) and used one of them (admin) to get into it and make changes.
// Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

// Comparison by reference
// *******************************************

// Two objects are equal only if they are the same object.
console.log(user == admin); //true
console.log(user === admin); //true

// two independent objects are not equal, even though they look alike ( eg.two different empty objects):
let a = {};
let b = {};
let c = {
  name: 'Warner',
};
let d = {
  name: 'Warner',
};

// a, b, c and d are independent objects
console.log(a == b); //false
console.log(c == d); //false
