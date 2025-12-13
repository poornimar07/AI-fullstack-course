
//advance

//reverse


//Write a function that reverses a string

let s ="Goodmorning";
const c = s.split('').reverse().join('');

console.log(c);

//without using reverse methode

function reversestring(str){
    

 let reverse ="";
 for(let i= str.length-1; i>=0; i--){
    reverse +=str[i];

 }
 return reverse;
}
reversestring("niceday");

//create a function that returns the largest number in an array

//const numbers = [45,12,78,23,90,56];

let largest =Number[0];
console.log(largest);//largest 45

//lets check all the other numbers one by one

//for(let i=0;i<numbers.length;i++){
   // console.log("check the number:" +numbers[i]);
// app.js:28 check the number:45
// app.js:28 check the number:12
// app.js:28 check the number:78
// app.js:28 check the number:23
// app.js:28 check the number:90
// app.js:28 check the number:56

//if(numbers[i] > largest){
    //largest = numbers[i];
    //console.log(" larges number is:" + largest)
//}





//using methods for largest number
const num = [45,34,2,78,98,12];

const max=Math.max(...num);
console.log(max);

//write a custom 'mymap' function like Array.mymap

const number1=[65,44,12,4];


//const newar =numbers.map(myfunction);
function myfunction (num){
    return  num *10;
}
//console.log(newar);


//create a function to check if a string is palindrome.

function ispolindrome(str){
    const reversed = str.split(' ').reverse().join('');
    if(reversed === str){return true};
   return false
}

console.log(ispolindrome("madam"));
console.log(ispolindrome("ratan"));


 //create a function that counts vowels in a string

//example1

function countvowels(str){
    //find the count of vowels
    const vowels = str.match(/[aeiou]/gi).length;
    //return number of vowels
    return  vowels
    }
    
    //take input
     //const input = prompt("Enter a string:");
    // console.log(countvowels(input))


//example2

const vowel = ['a','e','i','o','u'];

function countvowel(str){
    let count = 0;
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count  //not output
}
//const input2=prompt("Enter a letter:");

//onsole.log(countvowel(input2));

//use  ternary operator to check age >18 and print 'adult' or 'minor';

let age=30;

let age2 = age > 18 ? "adult" :"minor";
console.log(age2);


//created nested object and print oe inner property


// Create a nested object

const person ={
    Name:"alice",
    age:"25",
    address:{
     Street:"123, Main ,st",
     City:"Anytown",
     Zipcode:"1234",

    },

    contacts:{
    Email :"alice@example.com",
    Phone:"555-1234",
    }

}

// Access and print an inner property (e.g., city)
console.log(person.address.City);

// Access and print another inner property (e.g., email)
console.log(person.contacts.Email);


//8.use forEach to print all elements of an array;
const myarray =[10,20,30,40,50];

myarray.forEach(element => {
    console.log(element);
    
});

//create a function that sums all numbers in array using reduce.

function sumArrayWithReduce(arr) {
  // The reduce method takes a callback function and an initial value for the accumulator.
  // The callback function receives the accumulator (the running total) and the current value from the array.
  // It returns the updated accumulator for the next iteration.
  // The initial value (0 in this case) is used for the first call to the callback.
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
//const totalSum = sumArrayWithReduce(numbers);
//console.log(totalSum); // Output: 15


//combine two arrays using spread operator.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); 
// Output: [1, 2, 3, 4, 5, 6]