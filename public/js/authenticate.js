document.addEventListener('DOMContentLoaded', () => {
  // Wait for the DOM to be fully loaded

  // Find the login form by its ID
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    // Add a submit event listener to the form
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Extract the email and password from the form
      const email = loginForm.querySelector('#email').value;
      const password = loginForm.querySelector('#password').value;

      // Send the email and password to the server for authentication
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Authentication successful', data);
          // Handle successful authentication, e.g., redirect to the /yourspace route
          // window.location.href = '/yourspace'; // Add this line for redirection
        } else {
          const errorData = await response.json();
          console.error('Authentication failed', errorData);
          // Handle authentication failure, e.g., display an error message
        }
      } catch (error) {
        console.error('Authentication request failed', error);
        // Handle request failure, e.g., display a network error message
      }
    });
  }
});