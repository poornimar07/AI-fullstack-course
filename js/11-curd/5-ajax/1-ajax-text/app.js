
document.querySelector(".btn").addEventListener("click", loadData);

function loadData() {

    // Create an XMLHttpRequest object

    const xhr = new XMLHttpRequest();

    // console.log("XHR created:", xhr);

    //open

    xhr.open("GET","data.txt",true);

    // load

   xhr.onload  = function(){

        if(this.status === 200){
            document.querySelector("#output").innerText = this.responseText;
        }else{
            document.querySelector("#output").innerText  = `${this.status} Not found `;
        }  
    }

    //send
   xhr.send();
}