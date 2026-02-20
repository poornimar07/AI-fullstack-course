const form = document.querySelector("task-form")
// console.log("Form:", form);

const taskInput = document.querySelector("#task");
// console.log("Input:", taskInput);

const tasklist =document.querySelector(".collection")
// console.log("Tasklist:",tasklist);

const clearBtn = document.querySelector(".clear-task");
// console.log("Clear Button:",clearBtn);

const filter = document.querySelector("#search");
// console.log("Search:",filter);





//  <ul class="collection">
//               <!-- <li class="collection-item">
//                 List Item 1
//                 <a href="#" class="delete-item secondary-content test" title="im Link">
//                   <i class="fa fa-remove"></i>
//                 </a>
//               </li>



function addtask(e){
    e.preventDefault();// Page reload aagadhu

}
// console.log("form submited!");
// console.log("Input value:" ,taskInput.Value);


//  if(taskInput.value === "") {
//         alert(" Please enter a task!");
//          // Function ah stop pannu
//     }

    const li =document.createElement("li");

    li.className = "collection-item";
    li.innerText = taskInput.value;

    console.log("created li:",li);
    

    const link = document.createElement("a");

    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';/

    console.log();
    

    // li.appendChild(link);





