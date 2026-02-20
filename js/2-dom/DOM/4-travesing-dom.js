

let val;


const list = document.querySelector(".collection"); // ul
const lastListItem = document.querySelector("li:last-child");
const firstListItem = document.querySelector("li:first-child");


val = list;

val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.childNodes[2].nodeType;
val = list.childNodes[3].nodeType;

// 1 - Element
// 3 - Text
// 8 - comment

// Get the children element nodes


val = list.children;
val = list.children[0].children[0].children[0];



// First child

val = list.firstChild;
val = list.firstElementChild.innerHTML; //*** 



// Last

al=list.lastElementChild;


// Child count
val = list.childElementCount;

// Get the parent element
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

val = lastListItem;


// Previous element sibling 

val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
val = lastListItem.


// Next ELement sibling

val = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling


console.log(val);



