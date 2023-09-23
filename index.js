const myBooks = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `This book is called ${this.title}`;
  };
}

const book1 = new Book(
  "Democrat party hates America",
  "Mark R Levin",
  80,
  "yes"
);
const book2 = new Book("Elon Musk", "Walter", 70, "yes");
const book3 = new Book("The shadow work journal", "Keila Shaheen", 50, "no");
myBooks.push(book1);
myBooks.push(book2);
myBooks.push(book3);

document.querySelector("#form").addEventListener("submit", getBook);

function getBook(event) {
  event.preventDefault();
  addToLibrary();
}

function bookInfo() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  const newBook = new Book(title, author, pages, "yes");
  return newBook;
}

function addToLibrary() {
  myBooks.push(bookInfo());
  console.log(myBooks);
}

function displayBooks() {
  myBooks.map((book) => {
    let books = document.querySelector(".books");
    let eachbook = `<article>
    <h2>${book.title}</h2>
    <h2>${book.author}</h2>
    <h2>${book.pages}</h2>
    </article>`;
    books.innerHTML += eachbook;
  });
}

displayBooks();
