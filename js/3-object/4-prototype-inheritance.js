
function Person(firstName,lastName){

    this.firstName = firstName;
    this.lastName = lastName;
}

// greeting

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;

}

// full name

Person.prototype.getfullName = function(){
    return `${this.firstName} ${this.lastName}`;
}




const javid = new Person ("jagan","javid");

console.log(javid);
console.log(javid.getfullName());


// console.log(javid);

// Customer Object

function Customer(firstName , lastName, phone,membership){

    this.phone = phone;
    this.membership= membership;
}


// Inherit the person prototype methods to customer


Customer.prototype = Object.create(Person.prototype);

const javidCustomer = new Customer("jagan" , "javid", "111-1111-111" , "standard");


console.log(javidCustomer);
console.log(javidCustomer.greeting);

