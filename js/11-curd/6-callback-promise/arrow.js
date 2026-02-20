


// function x(){
//     console.log("X");
// }

// const sayHello = function(){
//     console.log("Hello");
// }

// const sayHello = () => {
//     console.log("Hello");
// }

// one line function does not need a braces
// const sayHello = () => console.log("Hello");

// One line return 
// const sayHello = () => "Hello";
// const sayHello = () => 5;
// const sayHello = () => true;
// const sayHello = () => [true, 1,2,"Hello"];

// Return one line in object
// const sayHello = () => ({msg:"Hello"});


// const sayHello = (name) => {
//   console.log(`Hello ${name}`);
// }


// Single params does not need a parentheses

// const sayHello = name => `Hello ${name}`;

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;



// console.log(sayHello("Javid", "Jagan"));

const users = ["Javid","Javid","Akash"];

users.forEach(function(name, index){
  console.log(`${name} - ${index}`);
})

users.forEach((name, index) => console.log(`${name} - ${index}`));



