// variables

let bookTitle,
  authorName,
  genreType,
  numberOfPages,
  totalCount,
  totalCollection,
  counter = 0,
  collection = [];

// functions
//add a book
function addBook() {
  let newBook;
  bookTitle = document.getElementById("book_title").value;
  authorName = document.getElementById("author").value;
  genreType = document.getElementById("genre_type");
  numberOfPages = document.getElementById("page_numbers").value;
  totalCount = document.getElementById("total_count");

  //validation check - only all required values entered proceed
  if (bookTitle && authorName && genreType && numberOfPages) {
    newBook = {
      bookTitle: bookTitle,
      authorName: authorName,
      genreType: genreType,
      numberOfPages: numberOfPages,
    };
    function growCollection() {
      //structure data as an array of newBook objects
      collection.push(newBook);
      counter++;
      //display count on UI
      totalCount.innerHTML = counter;
    }
    function clearInputs() {
      bookTitle = document.getElementById("book_title").value = "";
      authorName = document.getElementById("author").value = "";
      genreType = document.getElementById("genre_type").value = "";
      numberOfPages = document.getElementById("page_numbers").value = "";
    }
  } else {
    alert("Please enter data in all required fields to proceed");
  }
  growCollection();
  clearInputs();
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
