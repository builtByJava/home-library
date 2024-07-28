// variables
let counter = 0;
let collection = [];
const collectionDisplay = document.getElementById("added_new_book");

// functions
//add a book
function addBook() {
  // initialize critical variables
  let newBook, bookTitle, authorName, genreType, numberOfPages, totalCount;
  bookTitle = document.getElementById("book_title").value;
  authorName = document.getElementById("author").value;
  genreType = document.getElementById("genre_type");
  numberOfPages = document.getElementById("page_numbers").value;
  totalCount = document.getElementById("total_count");

  //validation check - only all required values entered proceed
  if (bookTitle && authorName && genreType && !isNaN(numberOfPages)) {
    function growCollection() {
      // store user inputs in an object
      newBook = {
        bookTitle: bookTitle,
        authorName: authorName,
        genreType: genreType,
        numberOfPages: numberOfPages,
      };
      //structure data as an array of newBook objects
      collection.push(newBook);
      counter++;
      //display count on UI
      totalCount.innerHTML = counter;
      showCollection();
    }
    function clearInputs() {
      bookTitle = document.getElementById("book_title").value = "";
      authorName = document.getElementById("author").value = "";
      genreType = document.getElementById("genre_type").value = "";
      numberOfPages = document.getElementById("page_numbers").value = "";
    }
    growCollection();
    clearInputs();
  } else {
    alert("Please enter data in all required fields to proceed");
  }
}

//display current collection
function showCollection() {
  const bookBox = document.createElement("div");
  collection.forEach((book) => {
    bookBox.innerHTML = `<div style="display:block;justify-content:center; align-items:center;" class="shadow-lg rounded px-10 pt-8 pb-10 mb-0 max-w-md mx-4">
    <p><span style="font-weight: bold; margin-right: 1rem;">Title:</span>${book.bookTitle}</p>
    <p><span style="font-weight: bold; margin-right: 1rem;">Author:</span>${book.authorName}</p>
    <p><span style="font-weight: bold; margin-right: 1rem">Genre:</span>${book.genreType.value}</p>
    <p><span style="font-weight: bold; margin-right: 1rem">Pages:</span>${book.numberOfPages}</p>
  </div>`;
  });
  collectionDisplay.appendChild(bookBox);
}
//delete a book
function removeBook() {}

//change a book title
function updateBook() {}

//sort book list
function sortSelf() {}

//total number of books added
function totalBooks() {}
// event callers
