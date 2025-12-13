

// Primitive Data Types

// String

const name = "Jagan";
// console.log("My name is " + name);
// console.log("Data type is: " + (typeof name));

// Number
const age = 25;     
// console.log("My age is " + age);
// console.log("Data type is: " + (typeof age));

// Boolean
const isApproved = true;
// console.log("Is Approved: " + isApproved);
// console.log("Data type is: " + (typeof isApproved));

// Null

const box = null;
// console.log("Box value is: " + box);
// console.log("Data type is: " + (typeof box));  // bug in JS, it shows object

// Undefined

let selectedColor;  // default value is undefined
// console.log("Selected color is: " + selectedColor);
// console.log("Data type is: " + (typeof selectedColor));
 



// Reference Data Types

// Array

const myArray = ["Jagan", 25, true,55, null];

// console.log(myArray);
// console.log("Data type is: " + (typeof myArray));  // object

// Object

const person = {
    name: "Jagan",
    age: 25,
    isApproved: true
};

console.log(person);
console.log("Data type is: " + (typeof person));  // object

