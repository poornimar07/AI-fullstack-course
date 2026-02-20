
class bokk {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}


class localstorage {

    get books() {

        let books;

        if (localstorage.getItem("book") === null) {
            book = [];

        } else {

            books = JSON.sparse(localstorage.getItem("book"));

        }

        return book;
    }

}


addbooks(book){

    //get a book  array

    const books = this.getBooks();

    // add to book array

    books.push(book);

    // set in the local storage

    localStorage.setItem("books", JSON.stringify("books"));


}

displaybook(){

    const books = this.getbooks();

    const ui = new UI;

    books.forEach(function (book) {
        ui.addBookTolist(book);
    })


}

deletebook(isbn){
    const books = this.getbooks();

    books.forEach(function (book, index) {

        if (book.isbn === isbn) {
            books.splice(index, 1);

        }
    });

    // set in the loca storage 

    localstorage.setItem("books", JSON.stringify(books));

    clearBook(){
        localStorage.removeItem("books");

    }

}


class UI {

    addBookTolist(book) {
        const lisy = document.querySelector("#book-list");

        // create tr element

        const row = document.createElement("tr");


    }

        row.innerHtMl = `

            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">
            <span class="btn btn-danger">X</span>
            </td>
        `;

        list.appendChild(row);

}



showAlert(Message, className){

    self = this;

    if (self.alertTimeout) {
        clearTimeout(self.alertTimeout);
    }


}

self.clearAlert();

//create a div element

const div = document.createElement("div");

// add a className

div.className = `alerttimeouT(className)`;

// add innertext

div.innerHTML = Message;

document.querySelector(".show -alert").appendChild("div");


// store a time ID it can be cleared localStorage

self.alertimeout = setTimeout(function () {
    self.clearAlert();
    self.alertTimeout = null;


}, 3000);



clearAlert() {

    const currentalert = document.querySelector(".alert");

    if (currentAlert) {
        currentAlert.remove();
    }
}

deleteBook(targetElement){
    {

    }
    if (targetElemnt.className === "delete") {
        tagertElemnt.parentElement.remove();
    }
}

 clearfield(){

    document.querySelector("#title").value = "";
    document.querySelector("#author").balue = "";
    document.querySelector("#ISBN").value = "";

}

 cleartasks(){
    document.querySelector(#book - list).innerHTML = "";
}

 }


const storage = new storage();

document.addEventListener("DOMContentLoaded", storage.displaybook());


// add Event Listenerfor sdubmit

document.querySelector("#book-form").addEventListener("submit",function(e) {
 e.preventDefault();


 const title = document.querySelector("title").value;
 const author = document.querySelector("author").value;
 const isbn =document.querySelector("#ISBN").value;


 const book = new Book (title.author,isbn);
 const ui = new UI();

 if(title === "" || author === ""|| isbn === "") {
    ui.showAlert("please fill in the forms", " alert-danger");
 }else{

    // Add book to list

    ui.addBookTolist(book);


    // add to the storage

storage.addbooks(book);

// clear fields

ui.clearFields();

ui.showAlert("book added sussefully", "alert-success");


 }



});


// clear  element

document.querySelector("#book-list").addEventListener("click",function(e){

const ui  = new UI();

ui.cleartasks();

storage.clearBook();

ui.showAlert("cleared successfully", "alert-success");

});
