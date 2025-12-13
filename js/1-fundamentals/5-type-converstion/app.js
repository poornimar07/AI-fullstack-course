


let val;

// Number to String

val = String(555);
val = String(4 + 4);


// Bool to String

val = String(true);

// Arr to String

val = String([1,2,3,4]);

// String to number

val = Number('5');
val = Number("5" + "5");
val = Number("5 + 5"); // NaN Not a number

// Bool to number

val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN Not a number
val = Number([1,2,3]); // NaN Not a number

val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);