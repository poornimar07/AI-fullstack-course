
const firstName = "Jagan";
const lastName = "Javid";

let val;

val = firstName + lastName; // Concatenation
val = firstName + " " + lastName; // Concatenation with space

// Append
val = "Jagan ";
// val = val + "Javid";
val += "Javid";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Indexing
val = firstName[0];
val = firstName[3];
val = firstName[5];

// CharAt
val = firstName.charAt(0);

// Slice
const fruit = "Orange";

val = fruit.slice(1, 4);

// Split
const str = "Hello there, my name is Jagan";

val = str;
val = str.split(" ");
val = str.split("");
val = str.split(",");

// Replace
val = str.replace("Jagan", "Javid");

// Includes
val = str.includes("Hello");
val = str.includes("foo");

console.log(val);
console.log(typeof val);