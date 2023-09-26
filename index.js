const myBooks = [];
let books = document.querySelector(".books");
let addBtn = document.querySelector(".btn");
let form = document.querySelector("#form");
let formSection = document.querySelector(".form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `This book is called ${this.title}`;
  };
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  formSection.classList.add("display_form");

  //addBtn.style.display = "none";
});

form.addEventListener("submit", getBook);

function getBook(event) {
  event.preventDefault();
  books.innerHTML = "";
  formSection.classList.remove("display_form");

  addToLibrary();
  form.reset();
}

function bookInfo() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  const newBook = new Book(title, author, pages, "yes");
  return newBook;
}

console.log(bookInfo());

function addToLibrary() {
  myBooks.push(bookInfo());

  myBooks.map((book) => {
    let eachbook = `<article class="book">
    <h2>Title: ${book.title}</h2>
    <h2>Author: ${book.author}</h2>
    <h2>Pages: ${book.pages}</h2>
    <button class="article_btn read-status">Read</button>
    <button class="article_btn rmv">Remove book</button>
    </article>`;
    books.innerHTML += eachbook;

    //Removing a book

    let rmvBtn = document.querySelector(".rmv");
    rmvBtn.addEventListener("click", () => {
      document.querySelector(".book").remove();
    });

    //Toggle Read status

    let readBtn = document.querySelector(".read-status");
    readBtn.addEventListener("click", () => {
      readBtn.innerHTML == "Read"
        ? (readBtn.innerHTML = "NotRead")
        : (readBtn.innerHTML = "Read");
    });
  });
}

// Remove and read buttons of the books in the dom already
const domBook = () => {
  let rmvBtn = document.querySelector(".rmv");
  rmvBtn.addEventListener("click", () => {
    document.querySelector(".book").remove();
  });

  //Toggle Read status

  let readBtn = document.querySelector(".read-status");
  readBtn.addEventListener("click", () => {
    readBtn.innerHTML == "Read"
      ? (readBtn.innerHTML = "NotRead")
      : (readBtn.innerHTML = "Read");
  });
};

domBook();
