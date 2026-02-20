
// ES5

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }

}

const person1 = new Person("Jagan", "Javid");
const person2 = new Person("Arun", "Kumar");




// console.log(person1);
// console.log(person2);

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// Gobal Scope

// console.log(this); // (window in browser / global in Node)

// alert("123");
// this.alert(123);


// console.log(window);

// this === window;

// Normal Function

function test() {
    console.log(this);
}

test(); // called normally

// "this" ==> window (global)

// Inside an object

// const a = {
//     x: function(){
//         console.log(this);
//     }
// }

// a.x();

// a.x() ===> "this" points to "a"

// this = a;


// Nested function inside object method

// const a = {

//     x:function(){
//         console.log("x", this);

//         function b(){
//             console.log("b",this);
//         }

//         b();
//     }

// }

// a.x();


// a.x() ==> this = a

//  inside b() ==> standalone call

//  this = window (Not "a")



// Lexical this
const a = {

    x: function () {
        console.log("x", this);

        const b = () => {
            console.log("b", this);
        }

        b();
    }

}

a.x();
