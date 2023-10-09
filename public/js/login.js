// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.querySelector('.login-form');
  
//     loginForm.addEventListener('submit', async (e) => {
//       e.preventDefault();
  
//       const email = document.querySelector('#email').value;
//       const password = document.querySelector('#password').value;
  
//       try {
//         const response = await fetch('/login', {
//           method: 'POST',
//           body: JSON.stringify({ email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         });
  
//         if (response.ok) {
//           // Redirect or handle successful login
//           window.location.href = '/profile';
//         } else {
//           // Handle login failure, e.g., show an error message
//           console.error('Login failed');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//       }
//     });
//   });
  

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the login route
    const response = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // Send a POST request to the signup route
    const response = await fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
