

// if(something){
//     // do something 
// }else{
//     // do something else
// }

const id = 100;

// EQUAL TO value
if(id == "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}



// Not EQUAL TO value
if(id != "101"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}


// EQUAL TO value & type

if(id === 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}


// Not EQUAL TO value & type

if(id !== "101"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}


// Test if undefined

let greet = "Hello";

// console.log(typeof greet);

if(typeof greet !== 'undefined'){
    console.log(`The value is ${greet}`);
}else{
    console.log("No value");
}

// Greater or less than

if(100 >= 100){
  console.log("CORRECT");     
}else{           
    console.log("INCORRECT");   
}

if(100 <= 99){
  console.log("CORRECT");     
}else{           
    console.log("INCORRECT");   
}

// Else if

const color = "green";

if(color === "red"){
    console.log("Color is red");
} else if(color === "blue"){
    console.log("Color is blue");
} else if(color === "yellow"){
    console.log("Color is yellow");
}else{
    console.log("Color is not red, blue or yellow");
}

// Logical operators - OR ==> || AND ==> &&

const name = "Steve";
const age = 66;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
}else if (age >= 20 && age < 100){
    console.log(`${name} is an adult`);
}else{
    console.log(`${name} is a dead`);
}

// OR ||

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else{       
    console.log(`${name} is registered for the race`);  
}