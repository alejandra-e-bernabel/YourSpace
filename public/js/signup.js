document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');
  
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
  
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          // Redirect or handle successful signup
          window.location.href = '/login';
        } else {
          // Handle signup failure, e.g., show an error message
          console.error('Signup failed');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    });
  });
  