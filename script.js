// CREATE TEST BOOKS
const infiniteJest = new Book("Infinite Jest", "DFW", 1200, "read");
const klaraAndTheSun = new Book(
  "Klara and the Sun",
  "Kazuo Ishiguro",
  400,
  "read"
);
const onTheRoad = new Book("On the Road", "Jack Kerouac", 280, "read");

// JAVASCRIPT LIBRARY OBJECT
const library = [infiniteJest, klaraAndTheSun, onTheRoad];

// HTML VARIABLES
const bookshelf = document.querySelector(".bookshelf");
const addBookForm = document.querySelector(".add-book-form");
const fab = document.querySelector(".fab");
const addBookBtn = document.getElementById("addBookBtn");

// on click
// toggle the display of the form
fab.addEventListener("click", () => {
  addBookForm.classList.toggle("hidden");
});

// CREATE BOOK
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `
    <p>${title}</p> 
    <p>by ${author}</p>
    <p>pages: ${pages}</p> 
    <p>status: ${read}</p>`;
  };
}

// ADD BOOK TO LIBRARY
function addBookToLibrary(book) {
  library.push(book);
}

// CREATE LIBRARY BOOK HTML CARD
function createBookCard(book) {
  // create container
  const newBookDiv = document.createElement("div");
  // add object as content to newBookDiv variable
  newBookDiv.innerHTML = book.info();
  // apply css class to style container
  newBookDiv.classList.add("book");
  return newBookDiv;
}

// BUILD LIBRARY IN HTML
function buildLibrary(library, bookshelf) {
  // iterate over library array items
  library.forEach((book) => {
    // create a new book card
    const bookCard = createBookCard(book);
    // add card to bookshelf
    bookshelf.appendChild(bookCard);
  });
}
buildLibrary(library, bookshelf);

// ADD BOOK USING HTML BUTTON
// when "Add book" button is clicked
addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // prompt the user to answer questions about the book's title, author, pages, and whether they've read it.
  // store prompt answer after each question
  const title = document.getElementById("title").value;
  console.log(title);
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("status").value;

  // create a book object in javascript to store answers
  const newBook = new Book(title, author, pages, read);

  // add book to library array
  addBookToLibrary(newBook);

  // Create and append the new book card to the existing bookshelf content
  const bookCard = createBookCard(newBook);
  bookshelf.appendChild(bookCard);
});
