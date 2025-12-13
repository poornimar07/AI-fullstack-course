



const numbers = [4,54,63,98,12,34,23,45,67,89,22];

const str = "Hello World";

let val;


// Get array length
val = numbers.length;


// Check if is array
val = Array.isArray(numbers);


// Get the index value
val = numbers[0];
val = numbers[5];
val = numbers[numbers.length - 1];


// Change into array index value

// numbers[2] = 100;

// Find index of value
// val = numbers.indexOf(77);

// Mutating arrays

// Add on to end
numbers.push(250);

// Add on to front
numbers.unshift(120);

// Take off from end
numbers.pop();

// Take off from front
numbers.shift();


// Splice ===> To remove to add

const fruits = ['Apple', 'Banana', 'Orange', 'Pear'];


// To Remove
// val = fruits.splice(1,2);


// To Add
fruits.splice(2, 1, "Mongo");

console.log(fruits);




// console.log(val);
// console.log(numbers);



const arr = [1,2,3];

// const result = arr.map((x) => x * 2);

// console.log(result);


function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    // Call the callback for each item and push the result
    result.push(callback(array[i], i));
  }
  return result;
}

const res = myMap(arr, function(x){
    return x * 2;
})

console.log(res);