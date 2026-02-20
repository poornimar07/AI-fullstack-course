

const apiURL = "https://691f2f01bb52a1db22c0cded.mockapi.io/api/v1/tasks";
let editID = null;
let allPost = [];
let currentPage = 1;
const pageSize = 4;


document.querySelector(".addButton").addEventListener("click", handleData);
document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
    try{

        const response = await fetch(apiURL);
 
        allPost = await response.json();

        renderData();

    }catch(error){
        console.log(error);
    }
}


async function handleData() {

    const inputData = document.querySelector("#inputData").value;

    if(!inputData){
        alert("Please fill the fields");
        return;
    }

    const data = {
        data:inputData
    }

    try{
       
        await fetch(apiURL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        resetForm();
        fetchData();

    }catch(error){
        console.log("Something went worng");
    }

    
}

function renderData(){

    const dataList = document.querySelector("#dataList");

    allPost.forEach(post => {
        
        const listItem = document.createElement("li");

        listItem.innerHTML = `${post.data}`;

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("btn", "btn-warning");

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("btn", "btn-danger");

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        dataList.appendChild(listItem);


    })

}


function resetForm(){
    document.querySelector("#inputData").value = "";
}