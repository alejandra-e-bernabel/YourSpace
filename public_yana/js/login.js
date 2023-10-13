document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
  ​
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  ​
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
  ​
        try {
            const response = await fetch('/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
  ​
            if (response.ok) {
                // Redirect to the profile page upon successful login
                window.location.href = '/profile';
            } else {
                // Handle login failure, e.g., show an error message
                console.error('Login failed');
            }
        } catch (err) {
            console.error('Error:', err);
        }
    });
  });