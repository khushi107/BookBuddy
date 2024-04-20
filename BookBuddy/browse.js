

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display books for sale
    fetchBooks();
  });
  
  function fetchBooks() {
    // Simulate fetching books from a server or API
    const books = [
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 3',
        author: 'Author Name 3',
        price: 15.99,
        imageUrl: 'book3.jpg'
      },
      {
        title: 'Book Title 4',
        author: 'Author Name 4',
        price: 9.99,
        imageUrl: 'book4.jpg'
      }
      // Add more book objects as needed
    ];
  
    displayBooks(books);
  }
  
  function displayBooks(books) {
    const bookList = document.getElementById('bookList');
  
    books.forEach(book => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');
      card.innerHTML = `
        <div class="card book-card">
          <img src="${book.imageUrl}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: ${book.author}</p>
            <p class="card-text">Price: $${book.price.toFixed(2)}</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      `;
  
      bookList.appendChild(card);
    });
  }



  
  