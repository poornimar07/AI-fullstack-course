

// const x = function(){
//     console.log("x");
// }

// x();


let x = 10;

const person = (function(){


    // Private
    const x = 5;
   
    // Public
    return {
        x:x
    }


})();

console.log(person);


const person2 = (function(){

    // Private 
    const x = 10;

    // Public
    return{
        x:x
    }


})();


console.log(person2);