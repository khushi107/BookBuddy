// login.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
  });
  
  function handleLogin(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate authentication (replace with server-side authentication)
    // In a real-world scenario, you would send this data to the server for authentication
    // and handle user sessions securely.
    if (username === 'user' && password === 'password') {
      // Simulate storing the user session (replace with a proper session handling mechanism)
      localStorage.setItem('currentUser', username);
  
      // Redirect to the "Books for Sale" page after successful login
      window.location.href = 'books.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  