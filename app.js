/* Display Add Book Popup */
function displayPopUp() {
  document.getElementById('popup').style.display = "block";
}

/* Close Add Book Popup */
function closePopUp() {
  document.getElementById('popup').style.display = "none";
}

let myLibrary = [];

/* Book constructor */
class Book {
  constructor(name, author, pages) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.info = function () {
      return (name + " " + "by" + " " + author + ", " + pages + " " + "pages");
    };
  }
}


/* Take Book Info and Initiate displayEachBook() */
document.querySelector('#book-form').addEventListener('submit', (e) => {

  //Prevent default submit action
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  //const read = document.querySelector('#yeas').value;
  //const notRead = document.querySelector('#notyet').value;

  const book = new Book(title, author, pages);

  displayEachBook(book);

  /* Display Book in the Table */
  function displayEachBook() {
    const list = document.querySelector('#body');
    const row = document.createElement('tr');

    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>demo</td>
  <td>demo</td>
  <td>demo</td>

`
    list.appendChild(row);

  }

})

function addBookToLibrary() {

}