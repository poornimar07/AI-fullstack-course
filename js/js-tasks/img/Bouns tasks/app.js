//build a function that return factorial of a number

function factorial(n){

    if(n==0 || n ==1){return 1};

    let result =1;
    for (let i=0;i,n;i++){
        return 1;
    }

    return result;
}
    console.log(factorial(5));

    //2 Write function that removes duplicate values from array.

    function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
//const numbers = [1, 2, 2, 3, 4, 4, 5];
//const uniqueNumbers = removeDuplicates(numbers);
//console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    

//3 Create a program that sort numbers ascending and descending

let arr = ['23','34','65','56','76','87','12','98'];
function sortNum(){
      const arr1 = [...arr];
      const ascending = [...arr1].sort((a,b)=>a-b);
      console.log(ascending);
      const decending = [...arr1].sort((a,b)=>b-a);
      console.log(decending);
}
sortNum();

//4.create a function that finds even and odd numbers in array

const array4 = ["2",'66','3','9','44','64','98','7','33'];

function evenodd(){
for(let i= 0;i  < array4.length; i++){
if(array4[i]%2 === 0){
    console.log("the given array is even"  + array4[i]);
 }
else{
       console.log("the given array is odd"  + array4[i]); 
    }
}
}

evenodd();


//example2
///let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even =[];
//for  ( let i=0; i<numbers.length;i++){
    //if(numbers [i]%2 == 0)
       // even.push(numbers[i]);
//}


// Printing output

//write a function to merge two objects into one;

function mergeObjectsSpread(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Example usage:
const objectA = { a: 1, b: 2 };
const objectB = { c: 3, d: 4 };
const mergedObject1 = mergeObjectsSpread(objectA, objectB);
console.log(mergedObject1); // Output: { a: 1, b: 2, c: 3, d: 4 }

const objectC = { x: 10, y: 20 };
const objectD = { y: 30, z: 40 };
const mergedObject2 = mergeObjectsSpread(objectC, objectD);
console.log(mergedObject2); // Output: { x: 10, y: 30, z: 40 }
    


//create an arrow function to find square of numbers in array.

let a = ['1','2','3','4','5'];
const square = (a) => a*a;
console.log(square);

//use template literals to print your name,age and city

name = "pooja";
age =25;
city = "chennai";

console.log(`my name is ${name} and age is ${age} living in ${city}`)

//create a function that filters prime numbers in array;



  

  
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check if num is divisible by 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for divisors from 5 up to the square root of num
  // We only need to check numbers of the form 6k ± 1
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function filterPrimeNumbers(arr) {
  return arr.filter(isPrime);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 29];
const primeNumbers = filterPrimeNumbers(numbers);
console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 29]




//celsius to fahrenheit
function celfah(celsius){
    const fahrenheit = (celsius *9/5) +32;
    return fahrenheit;
}

const num = 44;
const num2 = celfah(num);
console.log(num2);