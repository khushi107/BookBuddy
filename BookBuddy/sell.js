// sell.js

document.addEventListener('DOMContentLoaded', function () {
    const sellForm = document.getElementById('sellForm');
    sellForm.addEventListener('submit', handleSellBook);
  });
  
  function handleSellBook(event) {
    event.preventDefault();
  
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);
    const imageUrl = document.getElementById('imageUrl').value;
  
    // Validate form values
    if (!title || !author || isNaN(price) || price <= 0 || !imageUrl) {
      alert('Please fill in all fields with valid values.');
      return;
    }
  
    // Simulate adding the book to the list of books for sale
    const newBook = {
      title: title,
      author: author,
      price: price,
      imageUrl: imageUrl
    };
  
    // Simulate updating the list of books for sale
    const currentBooks = getBooks();
    currentBooks.push(newBook);
    setBooks(currentBooks);
  
    alert('Book added successfully!');
    // Redirect to the "Books for Sale" page
    window.location.href = 'books.html';
  }
  
  function getBooks() {
    // Simulate fetching books from a server or storage
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }
  
  function setBooks(books) {
    // Simulate saving books to a server or storage
    localStorage.setItem('books', JSON.stringify(books));
  }
  