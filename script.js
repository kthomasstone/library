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

// CREATE BOOK
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages ${read}`;
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
  newBookDiv.textContent = book.info();
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

const addBookBtn = document.getElementById("addBookBtn");
// ADD BOOK USING HTML BUTTON
// when "Add book" button is clicked
addBookBtn.addEventListener("click", () => {
  // prompt the user to answer questions about the book's title, author, pages, and whether they've read it.
  // store prompt answer after each question
  const title = prompt(
    "What is the title of the book?",
    "Androids Dream of Electric Sheep"
  );
  const author = prompt("Who is the author?");
  const pages = prompt("How many pages is the book?");
  const read = prompt("Have you read the book? (read/not read)", "read");

  // create a book object in javascript to store answers
  const newBook = new Book(title, author, pages, read);

  // add book to library array
  addBookToLibrary(newBook);

  // clear existing bookshelf
  bookshelf.innerHTML = "";
  // build library to refresh the bookshelf html
  buildLibrary(library, bookshelf);
});
