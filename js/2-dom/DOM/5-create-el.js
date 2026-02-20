

/* <li class="collection-item">
    List Item 1
    <a href="#" class="delete-item secondary-content test" title="im Link">
        <i class="fa fa-remove"></i>
    </a>
</li> */




const ul = document.querySelector(".collection");

// Create element

const li = document.createElement("li");

// Add id to li

li.id ="test";

// Add class to li

li .className = "collectionItem";


// Add a inner text
li.innerText = "Hello";

// Create a new link element

const link = document.createElement("a");

// Add class to link

link.className = "delete-Item secondary-content test";

// Add icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li

li.appendChild(link);

// Append li to ul

li.appendChild(ul);

console.log(li);
console.log(link);


