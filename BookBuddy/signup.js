// signup.js

document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', handleSignup);
});

function handleSignup(event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate user registration (replace with server-side registration)
  // In a real-world scenario, you would send this data to the server for registration
  // and handle user accounts securely.
  alert(`User registered successfully!\nUsername: ${username}\nPassword: ${password}`);

  // Redirect to the login page after successful registration
  window.location.href = 'login.html';
}
