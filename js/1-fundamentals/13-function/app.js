

// Two phase

// 1. Creation phase
// 2. Execution phase

// Function statement - Function declaration

const firstName = "Jagan";

// greet("john", "doe");

function greet(firstName = "John", lastName = "Doe") { 

    // Default parameters - ES6 feature

    // Old way of setting default parameters

    if(typeof firstName === 'undefined') {
        firstName = "Default first name";
    }

    // if(typeof lastName === 'undefined') {
    //     lastName = "Default last name";
    // }

    console.log(`Hello my name is ${firstName} ${lastName}`);
}

greet("Jagan");


// Function expression

add(11,11);

const add = function(x, y) {
    console.log("Addition is: ", x + y);
}

add(11,11);