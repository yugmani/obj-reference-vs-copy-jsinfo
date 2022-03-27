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

// Cloning and merging, Object.assign
// *******************************************

// copying an object variable creates one more reference to the same object.
//  How do we get a duplicate of an object?
// Copying by reference is good most of the time.
// But if we really want duplicate of an object, then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

let student = {
  name: 'Risbon',
  age: 23,
};

let clone = {};

// let's copy all student properties into it(clone)
for (let key in student) {
  clone[key] = student[key];
}

console.log(clone); //{name: "Risbon", age: 23}
console.log(student == clone); //false

//let's change some content in clone object
clone.name = 'Shelly';

console.log(student.name); // Risbon still?
console.log(clone.name); // Shelly

// cloning using `Object.assign` method.
// ------------------------------------------

// Syntax: Object.assign(dest, [src1, src2, src3...])
// The first argument 'dest' is a target object.
// Further arguments src1, ...., are source objects.
// It copies the properties of all source objects src1, ..., srcN into the target dest.
// The call returns dest.
// we can use it to merge several objects into one:
let worker = {
  name: 'Jennifer',
};

let labor = {
  isExperienced: true,
};

let plumber = {
  isTrained: true,
};

// copies all properties from labor and plumber into worker
Object.assign(worker, labor, plumber);

console.log(worker);  //{name: "Jennifer", isExperienced: true, isTrained: true}

