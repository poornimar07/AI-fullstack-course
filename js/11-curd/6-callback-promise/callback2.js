
// Function that accepts a callback

// function sayHello(name, callback){

//     console.log(`Hello ${name}`);

//     callback();

// }

// Function to use as callback
// function sayGoodBye(){
//     console.log("Goodbye!");
// }

// Pass saygoodbye as callback
// sayHello("Javid", sayGoodBye);


// Callback with data

// function getUserData(userId, callback){

//     console.log(`Fecthing user ${userId}...`);

//     setTimeout(() => {
//         const user = {id:userId, name:"Javid", city:"Chennai"};

//         console.log(`User data recevided`);

//         callback(user);
//     }, 2000);


// }

// function displayUser(user){
//     console.log(`Name : ${user.name}, City:${user.city}`);
// }

// getUserData(1, displayUser);

// const orders = [];

// function placeOrder(foodName, onFoodReady){

//     console.log(`Order placed for ${foodName}`);

//     setTimeout(() => {
//         orders.push(foodName);
//         console.log(`Kitchen : ${foodName} is ready!`);

//         onFoodReady(foodName);
//     }, 2000);


// }

// function serverFood(food){
//     console.log(`Waiter : Serving ${food}`);
//     console.log(`Customer : MMM, ${food} is good`);
// }

// Order 1
// placeOrder("Biyani", serverFood);


// Pyramid of DOOM - callback hell

// makeFood("Brryani", (food1) => {
//    console.log(`Got ${food1}`);

//    makeFood("Dosai", (food2) => {
//     console.log(`Got ${food2}`);

//     makeFood("Idli", (food3) => {
//         console.log(`Got ${food3}`);
//     })
//    })
   
// })

// Promise