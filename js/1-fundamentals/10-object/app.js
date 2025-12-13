

// ( . ) Object are key and value pairs
// ( . ) Object are reference type
// ( . ) Object are mutable in nature

// How to create object

const person = { 
  // Property
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email:"j@gmail.com",
  hadDinner: true,
  hobbies: ["reading", "traveling", "swimming"],
  address:{ 
    street: "123 Main St",      
    city: "New York",
    state: "NY"
  },
  // Method
   getFullName: function() {
    return this.firstName + " " + this.lastName;
   }
};

let val;


// Get specific value
val = person.firstName; // *** dot notation
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[2];
val = person.address.street;
val = person.getFullName();


console.log(val);
