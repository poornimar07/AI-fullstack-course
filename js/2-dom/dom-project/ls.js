// set , get , remove, clear

localStorage.setItem("tasks", "Hello");

console.log(localStorage.getItem("tasks"));

localStorage.removeItem("tasks");

console.log(localStorage.getItem("tasks"));



// JSON

 const arr = [1,2,3];

 console.log(arr);
 
 console.log(String(arr));
 
 const arrToString = JSON.stringify(arr);

 console.log(arrToString);

 const stringToArr = JSON.parse(arrToString);

 console.log(stringToArr);

 