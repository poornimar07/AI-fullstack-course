function person(firstName,lastName){
    this.firstName = firstName ;
    this.lastName = lastName ;
    this.getfullName = function(){
        return this.firstName +" "+ lastName;
    }


}

const javid = new person ("jagan" , "javid");
const arun = new person ("Arun", "kumar");



person.prototype.getfullName = function(){
    return this.firstName + " " + lastName ;
}

person.__proto__.__proto__.gertfullName = function(){
    return this.firstName + " " + lastName;
}


console.log(prototype);
console.log(prototype. getfullName());

