let a ="Hello world";
console.log(a);

//alert("Good morning");

//Create 3 variables using var, let, const and explain difference.

//It is function-scoped and can be re-declared and updated;(before ES6)


var name = "Roja";
console .log(name); //louts;

var name = "Rose" //Redeclaration allowed
console .log(name); //Rose;

if(true){
    var age = 24;  //function -scoped
}
console.log(age) // 25 (accessible outside block)

//Let

//let city = "vellore" // Error (cannot re-declare in same scope);

if(true){
    let city =" Bangalore"; //Block scoped
    console.log(city); //bangalore.
}
//console.log(city) // Trichy (different scope);

//const

//const is also block-scoped but cannot ne re-assigned or re-declared.It must be initialized when declared.

const country ="India";6
console.log("country");

//country="usa" // Error (cannot reassign)
//const country = "Japan";  //Error (cannot re-declare);


if(true){
    const country="Newyork"; //Newyork
    console.log(country);
}
//console.log(country);

//use let when the value will change
//use const when the value will not change;

//addition
const ai = 40;
const bi = 20;
const ci = ai+bi;
console.log(ci);

//subtraction

const Di = 60;
const Ei =20;
const Fi = Di - Ei;
console.log(Fi);

//Multiplication

const gi = 50;
const hi =20;
const ji = gi * hi;
console.log(ji);

//Division
const ki = 70;
const Li = 20;
const Mi = ki / Li;
console.log(Mi);

//convert string to number

const fruit ="55";
const num1  =Number(fruit);

console.log(num1);
console.log(typeof num1);


//convert number to string;

const fruit1 ="55";
const num2  = fruit1.toString();

console.log(num2);
console.log(typeof num2);

//Create an object with your details(name,age,hobby) and print It

const details = {
    name:  "John",
    age :19,
    hobby : "reading",

}

console.log(details.name);
console.log(details.age);
console.log(details. hobby);


//6.Create an array with 5fruits and print the 3rd fruit

const fruits = ["apple","ornage","banana","gova","grape"]
console.log(fruit[2]);


//write a function that takes a name and prints a greeting message.

 function greeting(name){
    console.log(`Hello guys my name ${name}`);
 }

 greeting("Rose");
 greeting("Roja");

 //use if-else to check if a number is positive,negative or zero
 const num3 = 55;

  if(num3 > 0){
   console.log("the number is positive")
 }
 else if(num3 < 0){
    console.log("The number is negative")
 }
 else{
    console.log("the number is 0")
 }
 






 //use switch to print day of week based on number(1=monday)

 function day1(dayofweek){
switch (dayofweek){
    case "1" :
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
         alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("friday");
        break;
     case 6:
      alert("saturday");
        break;
        default:
           alert("Not a valid day");
           break

}
}


//create a simple loop to print a 1 t0 10 numbers

for (let i=1; i<=10; i++){
    console.log(i);
}