// HTMLCOLLETION not an element

const items  = document.getElementsByClassName("collection-item");

//console.log(items);

//items[0].style.color="blue";
//items[1].style.color="blue";
//items[2].style.color="blue";
//items[3].style.color="blue";
//items[4].style.color="blue";

//console.log(items.length);


// For loop

for(let i=onabort;i<items.length;i++){
    items[0].style.color="green";
}

const arr =[1,2,3,4,5];

//console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//arr.forEach(function(val, index, array){
  //  console.log(`${val} -${index}`);
   // console.log(array);
//});


//console.log(items);
 //let lists = Array.from(items);

 //console.log(lists);

lists.forEach(function(element){
    element.style.color ="blue";
});


// NodeList
// const listItems = document.querySelectorAll(".collection-item");


console.log(Array.isArray(listItems));

listItems.forEach(function(element, index, array){
    console.log(element, index, array);
});



