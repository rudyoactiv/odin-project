
/* Old way of defining a Book constructor function

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

*/

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
  new Book("1984", "George Orwell", 328, false),
  new Book("To Kill a Mockingbird", "Harper Lee", 281, true),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
  new Book("Pride and Prejudice", "Jane Austen", 432, true),
  new Book("Moby-Dick", "Herman Melville", 635, false),
  new Book("War and Peace", "Leo Tolstoy", 1225, true),
  new Book("The Catcher in the Rye", "J.D. Salinger", 277, false),
  new Book("The Chronicles of Narnia", "C.S. Lewis", 768, true),
  new Book("The Alchemist", "Paulo Coelho", 208, true),
];

displayBooks();


function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Create book card structure
    bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
            <div class="card-btns">
              <button class="toggle-read">${!book.read? "Read" : "Not Read?"}</button>
              <button class="remove-book">Remove</button>
            </div>
        `;

    // Add event listeners for buttons
    bookCard.querySelector(".toggle-read").addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    bookCard.querySelector(".remove-book").addEventListener("click", () => {
      removeBook(myLibrary.indexOf(book));
      displayBooks();
    });

    libraryContainer.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}

// add button
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", showForm);

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");
closeBtn.addEventListener("click", hideForm);

const bookForm = document.getElementById("book-form");

function showForm() {
  modal.classList.remove('hidden');
  bookForm.reset();
}

function hideForm() {
  modal.classList.add('hidden');
}

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title')
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read') === 'on';

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
    hideForm();
});