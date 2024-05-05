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
const removeBookButton = document.getElementById("buttonRemoveBook");

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
}
// Book.prototype.info = function () {
//   return `
//   <p class="title">${this.title}</p>
//   <p class="author">by ${this.author}</p>
//   <p class="pages">pages: ${this.pages}</p>
//   <p class="read">status: ${this.read}</p>`;
// };

// ADD BOOK TO LIBRARY
function addBookToLibrary(book) {
  library.push(book);
}

// CREATE LIBRARY BOOK HTML CARD
function createBookCard(book) {
  // create container
  const newBookDiv = document.createElement("div");
  // apply css class to style container
  newBookDiv.classList.add("book");

  // Create elements for each book property
  const titleBook = document.createElement("p");
  const authorBook = document.createElement("p");
  const pagesBook = document.createElement("p");
  const readBook = document.createElement("p");

  titleBook.classList.add("title");
  authorBook.classList.add("author");
  pagesBook.classList.add("pages");
  readBook.classList.add("read");

  titleBook.textContent = `${book.title}`;
  authorBook.textContent = `by: ${book.author}`;
  pagesBook.textContent = `${book.pages}`;
  readBook.textContent = `${book.read}`;

  newBookDiv.appendChild(titleBook);
  newBookDiv.appendChild(authorBook);
  newBookDiv.appendChild(pagesBook);
  newBookDiv.appendChild(readBook);

  const removeBookButton = createRemoveBookButton();
  newBookDiv.appendChild(removeBookButton);

  return newBookDiv;
}

// BUILD LIBRARY IN HTML
function buildLibrary(library, bookshelf) {
  // iterate over library array items
  library.forEach((book, index) => {
    // create a new book card
    const bookCard = createBookCard(book);
    // assign data attribute equal to index number
    bookCard.setAttribute("data-index", index);
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
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("status").value;

  // create a book object in javascript to store answers
  const newBook = new Book(title, author, pages, read);

  // add book to library array
  addBookToLibrary(newBook);

  // Create and append the new book card to the existing bookshelf content
  const bookCard = createBookCard(newBook);
  // set data-index attribute for new book card
  bookCard.setAttribute("data-index", library.length - 1);
  bookshelf.appendChild(bookCard);
});

// CREATE REMOVE BOOK BUTTON
function createRemoveBookButton() {
  // create button
  const buttonRemoveBook = document.createElement("button");
  buttonRemoveBook.classList.add("remove-book");

  const buttonStateLayer = document.createElement("div");
  buttonStateLayer.classList.add("btn-state-layer");

  const buttonTextP = document.createElement("p");
  buttonTextP.textContent = "Remove book";
  buttonTextP.classList.add("buttonText");

  buttonStateLayer.appendChild(buttonTextP);
  buttonRemoveBook.appendChild(buttonStateLayer);

  return buttonRemoveBook;
}

// add event listener to the bookshelf
bookshelf.addEventListener("click", (event) => {
  if (event.target.closest(".remove-book")) {
    const bookCard = event.target.closest(".book");
    if (bookCard) {
      bookshelf.removeChild(bookCard);
      const bookCardIndex = bookCard.getAttribute("data-index");
      library.splice(bookCardIndex, 1);
      // repopulate library bookCard indices
      updateBookIndices();
    }
  }
});

function updateBookIndices() {
  const remainingBooks = document.querySelectorAll(".book");
  remainingBooks.forEach((book, index) => {
    book.setAttribute("data-index", index);
  });
}
