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
  constructor(name, author, pages, status) {
    this.title = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    /*this.info = function () {
      return (name + " " + "by" + " " + author + ", " + pages + " " + "pages");
    };*/
  }
}


/* Take Book Info and Initiate displayEachBook() */
document.querySelector('#book-form').addEventListener('submit', (e) => {

  //Prevent default submit action
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const checked = document.querySelector('input[type="radio"]:checked');
  const status = checked.value;

  const book = new Book(title, author, pages, status);

  displayEachBook(book);

  /* Display Book in the Table */
  function displayEachBook() {
    const list = document.querySelector('#body');
    const row = document.createElement('tr');

    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td class="update">${book.status}</td>
  <td class="remove"><i class="far fa-trash-alt"></i></td>

`
    list.appendChild(row);

    clearFields()
  }

})



/**
 * Add Books to Library
 */
function addBookToLibrary() {

}


/**
 * Clear Fields on Submition
 */
function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

/**
 * Remove a Book function
 */

function removeBook(remove) {
  if (remove.classList.contains('remove')) {
    remove.parentElement.remove();
  } else if (remove.classList.contains('fa-trash-alt')) {
    remove.parentElement.parentElement.remove();
  }
}

/**
 * Update read status
 */
function updateReadStatus(readStatus) {
  if (readStatus.innerText == "Yeas") {
    readStatus.innerText = "Not yet";
  } else if (readStatus.innerText == "Not yet") {
    readStatus.innerText = "Yeas";
  }
}




/**
 * Get Click Target and Run removeBook Functiom
 */

document.querySelector('#body').addEventListener('click', (e) => {
  removeBook(e.target);
  updateReadStatus(e.target);
})