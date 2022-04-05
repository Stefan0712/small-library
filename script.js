let myLibrary =[];

function Book(title, author, pages,isRead, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.index = index;
}



const submitBtn = document.getElementById("submitBook");
const removeBtn = document.getElementById("remove");
const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("isRead");
const container = document.querySelector(".content");


addBtn.onclick = function(){
    modal.style.cssText = "display: block";
}
closeBtn.onclick = function(){
    modal.style.cssText = "display: none";
}



let bookTitle = 'Unkown title';
let bookAuthor = 'Unknown author';
let bookPages = 0;
let bookStatus = 'Unknow status';

titleInput.onblur = function(){
    bookTitle = this.value
}
authorInput.onblur = function(){
    bookAuthor = this.value
}
pagesInput.onblur = function(){
    bookPages = this.value
}
statusInput.onblur = function(){
    bookStatus = this.value;
}







let index = 0;

function addBookToLibrary(){
    var book = Object.create(Book);
    book.title = bookTitle;
    book.author = bookAuthor;
    book.pages = bookPages;
    book.isRead = bookStatus;
    book.index = index;

    myLibrary.push(book);

    
    const card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute("id",index);
    
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
    stat.setAttribute("type","button");

    stat.setAttribute("id","status");
    stat.setAttribute("onclick",`statusChange(${index})`);
    if(statusInput.value=="false"){
    stat.innerHTML = "Not read";
    stat.style.cssText = "background-color: red";
    } else if(statusInput.value=="true"){
       
        stat.style.cssText = "background-color: rgb(149, 233, 124)";
        stat.innerText = "Read";
    }

    
    

    const rmv = document.createElement('button');
    rmv.classList.add("remove");
    rmv.setAttribute("id","remove");
    rmv.setAttribute("type","button");
    rmv.setAttribute("onclick",`remove(${index})`);
    rmv.innerHTML="Remove";
    

    container.appendChild(card);
    card.appendChild(titl);
    card.appendChild(auth);
    card.appendChild(pag);
    card.appendChild(stat);
    card.appendChild(rmv);

   

    index++;
    modal.style.cssText = "display: none";

        


}
function statusChange(index){
    const parentDiv = document.getElementById(index);
    const statusBtn = parentDiv.querySelector("#status");
    statusBtn.style.cssText= " background-color: rgb(149, 233, 124)";
    statusBtn.innerHTML = "Read";
}


function remove(indx){
    for(let i=0;i<myLibrary.length;i++){
        if(myLibrary[i].index==indx){
            myLibrary.splice(indx,1);
        }
    }
    

    var card = document.getElementById(indx)
    container.removeChild(card);
}






