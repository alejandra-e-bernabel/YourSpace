// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.querySelector('.signup-form');
  
//     signupForm.addEventListener('submit', async (e) => {
//       e.preventDefault();
  
//       const name = document.querySelector('#name').value;
//       const email = document.querySelector('#email').value;
//       const password = document.querySelector('#password').value;
  
//       try {
//         const response = await fetch('/signup', {
//           method: 'POST',
//           body: JSON.stringify({ name, email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         });
  
//         if (response.ok) {
//           // Redirect or handle successful signup
//           window.location.href = '/login';
//         } else {
//           // Handle signup failure, e.g., show an error message
//           console.error('Signup failed');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
  const signupButton = document.querySelector('#signup-button');

  signupButton.addEventListener('click', signupFormHandler)
});

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};



