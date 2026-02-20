

// book construtor

function Book (title , author, isbn){
    console.log(Book);
    

    this.tilte = title ;
    console.log(title);

    this. author = author;
    console.log(author);

    this.isbn = isbn;
    console.log(isbn);

}

// UI

function UI (){

}

// addBooktolist

UI.prototype.addBookToList = function(book){

    const list = document.querySelector("#book-list");
    console.log();

    const row = document.querySelector("tr")
    console.log();


row.innerHtml = `
        v<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td class="delete">
        <span class="btn btn-danger">X</span>
        </td>   
    `;

    list.appenedchild(row);


}

UI.prototype.selfalret = function(){
    self=this;

    if("self.Timeout"){
        clearTimeout(self.Timeout)

    }
        
}

self.clearalert();

// create a new element

// const div = document.createElement("div");

// div.classsName = `alert ${className}`;

// div.innerText = message;

// document.queryselector(".show-alert").appendchild(div);

// self.alertTimeout = setTimeout (funtion(){
//     self=clearAlert();

//     self=alertTimeout = null;
// }, 3000);



UI.prototype.clearAlert= function(){
    console.log("clearing alert");

    const clearAlert = document.querySelector(".Alert");
    console.log();

    if(clearAlert){
        clearAlert.parentAlert.remove();
        console.log();
        
    }
    
    
}


UI.prototype.addBooklist =function(tergetElement){

    if(targetElement.classNmae === "delete"){
        targetElement.parentElement .remove();
        
        console.log();
        
    }

}

UI.prototype.clearfields = function(){
    console.log("clear the fields");

    //empty the title box

    document.querySelector("#title").value ="";
    console.log("clear the title box",title);

     //empty the author box

    document.querySelector("#author").value="";
    console.log("clear the author box ", author);

     //empty the isbn  box

     document.queryselector("isbn").value="";
     console.log("clear the isbn box", isbn);
     
    UI.prototype.clearyask = function(){
        document.queryselector("#book-list").innerHTML="";

    }
 
}


// add event liner

document.querySelector("#book-form").addEventlisner("submit",function(e){

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    const book = new Book(title,author,isbn);
    const ui = new UI();

    if(title === ""||author === ""|| isbn === ""){
        ui.showAlert ("please fill the form", "Alert-danger");
    }else{

        //add book list

        ui.addBooklist(Book);

        // clear fields

        ui.clearfields();

        ui.showAlert("Added sucessfully", "Alert-dander");

    }

});

// delete Event Listener


document.querySelector("#book-list").addEventlistener("click",function(e){

    if(e.target.parentElement.className === "delete"){

        const ui = new UI();

        //delete Book 

        ui.deleteBook(e.target.parentElement);

        ui.showAlert("Deleted successfully","Alert-success");
    }

})

// clear element

document.querySelector(".clear").addEventlisner("click",function(e){

    const ui = new UI();

   ui.cleartasks();

   ui.showAlert("cleared successfully" , "alert-success");
}); 










