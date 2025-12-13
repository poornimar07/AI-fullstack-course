// Var, let and Const

// var - global scope or function scope
// let - block scope
// const - block scope and cannot be reassigned

var name = 'John Doe';

// console.log(name);

name = 'Steve Smith';

// console.log(name);


// INIT Variable

var greeting;

// console.log(greeting);

greeting = 'Hello';

// console.log(greeting);

// letters, numbers, _, $

// Can not start with number

// 5star = '5 Star'; // This will throw an error

// var 5star = '5 Star';

// console.log(5star);

var star5 = '5 Star';

// console.log(star5);

// Multi word variables

var firstname = "jagan"; // Normal case
var firstName = "Javid"; // Camel case // ***
var first_name = "John"; // Underscore
var FirstName = "Sara"; // Pascal case
var $firstName = "Jen"; // Dollar sign

// console.log($firstName);


// let

let newName;

// console.log(newName);

newName = 'Jagan';

// console.log(newName);

newName = 'Javid';

// console.log(newName);

// const

// Have to assign a value
// cant ressingn

const anotherName = 'Javid';

// const anotherName = 'Jagan'; // This will throw an error

// anotherName = 'Jagan'; // This will throw an error

console.log(anotherName);