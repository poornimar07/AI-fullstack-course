document.querySelector("#button-1").addEventListener("click", getPosts);



function getPosts(){

    // Create a xhr

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // Load
    xhr.onload = function(){

        let output = "";

        if(this.status === 200){

            const posts = JSON.parse(this.responseText);

            posts.forEach(function(post){
                
                output += `
                 <ul>
                    <li>ID : ${post.id}</li>
                    <li>Name : ${post.title}</li>
                    <li>Company : ${post.body}</li>
                </ul>
                `

            });

            document.querySelector("#posts").innerHTML = output;

        }

    }

    // Send

    xhr.send();


}