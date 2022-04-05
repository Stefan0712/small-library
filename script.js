let myLibrary =[];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}



const submitBtn = document.getElementById("submitBook");
const statusBtn = document.getElementById("status");
const removeBtn = document.getElementById("remove");
const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("statusCh");
const container = document.querySelector(".content");


addBtn.onclick = function(){
    modal.style.cssText = "display: block"
}
closeBtn.onclick = function(){
    modal.style.cssText = "display: none"
}


let bookTitle;
let bookAuthor;
let bookPages;
let bookStatus;

titleInput.onblur = function(){
    bookTitle = this.value
}
authorInput.onblur = function(){
    bookAuthor = this.value
}
pagesInput.onblur = function(){
    bookPages = this.value
}
statusInput.onclick = function(){
    bookStatus = this.value
}





let index = 0;

function addBookToLibrary(){
    console.log("This function is initialised")
    var book = Object.create(Book);
    book.title = bookTitle;
    book.author = bookAuthor;
    book.pages = bookPages;
    book.isRead = bookStatus;

    myLibrary.push(book);

    
    const card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute("data-attribute",index);
    
    const titl = document.createElement('div');
    titl.classList.add("title");
    titl.innerHTML = bookTitle;

    const auth = document.createElement('div');
    auth.classList.add("author");
    auth.innerHTML = bookAuthor;

    const pag = document.createElement('div');
    pag.classList.add("pages");
    pag.innerHTML = bookPages;

    const stat = document.createElement('button');
    stat.classList.add("status");
    stat.setAttribute("id","status");
    if(book.isRead==true){
        stat.innerHTML = "Read";
    }
    else {
        stat.innerHTML = "Not read";
        stat.style.cssText = "background-color: red";
    }

    const rmv = document.createElement('button');
    rmv.classList.add("remove");
    rmv.setAttribute("id","remove");
    rmv.innerHTML="Remove"

    container.appendChild(card);
    card.appendChild(titl);
    card.appendChild(auth);
    card.appendChild(pag);
    card.appendChild(stat);
    card.appendChild(rmv);



    index++;
    




}