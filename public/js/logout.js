document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', async () => {
        try {
          const response = await fetch('/logout', {
            method: 'POST',
          });
  
          if (response.ok) {
            // Redirect or handle successful logout
            window.location.href = '/';
          } else {
            // Handle logout failure, e.g., show an error message
            console.error('Logout failed');
          }
        } catch (err) {
          console.error('Error:', err);
        }
      });
    }
  });
  