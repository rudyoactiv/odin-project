console.log("Start");

// Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:

// theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

     this.info = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read? "read" : "not read yet"}.`)
    }
}

const hobbit = new Book("hobbit", "tolkien", 295, false);

console.log(hobbit.info());