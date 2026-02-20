
// Remove element

const list = document.querySelector("li");

// list.remove();

const lists = document.querySelectorAll(".collection li");

// lists.forEach(function(element){
//     element.remove();
// })

// Class && ATTR

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST

val.add("STOZ");

val.forEach(function(cls){
    console.log(cls);
})

val.remove("test");

val.replace("STOZ", "CodeJavid");

const toggleBtn = document.querySelector(".toggle");
 body = document.querySelector("body");

// toggleBtn.addEventListener("click", function(e){
    // body.style.backgroundColor = "green";
 //})


 
 //toggleBtn.addEventListener("click", function(e){
    //body.className = "add-color";
  // })

toggleBtn.addEventListener("click", function(e){
 body.classList.add("add-color");
})


document.querySelector(".clear-tasks").addEventListener("click", function(e){
    body.classList.remove("add-color");
})
   

// toggleBtn.addEventListener("click", function(e){
//     body.classList.toggle("add-color");
// })