let myLibrary = [];

function Book(name, author, pages, read ){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return (name + " " + "by" + " " + author + ", " + pages + " " + "pages" + ", " + read); 
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "not read yet" );

console.log(theHobbit.info());

function addBookToLibrary() {

}

function displayEachBook() {

}

