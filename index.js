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
