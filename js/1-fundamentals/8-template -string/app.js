


const name = "Jagan";
const age = 26;
const job = "Web Developer";
const city = "Bangalore";


let html;


// Without template strings (es5)

// html = "My name is " + name + ". I am " + age + " years old. I work as a " + job + " in " + city + ".";

// With template strings (es6)

html = `My name is ${name} age ${age} my job is ${job} in ${city}.`;

console.log(html);