// Import bcrypt
const bcrypt = require('bcrypt');

// Hashes a plaintext password using bcrypt and returns a Promise.
function hashPassword(plaintextPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plaintextPassword, 10, (err, hashedPassword) => {
      if (err) {
        // Handle the error, e.g., log it or reject the Promise
        console.error('Error hashing password:', err);
        reject(err);
      } else {
        resolve(hashedPassword);
      }
    });
  });
}

// Compares a provided plaintext password with a hashed password and returns a Promise.
function comparePasswords(providedPassword, hashedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(providedPassword, hashedPassword, (err, result) => {
      if (err) {
        // Handle the error, e.g., log it or reject the Promise
        console.error('Error comparing passwords:', err);
        reject(err);
      } else if (result) {
        // Passwords match; user is authenticated
        resolve(true);
      } else {
        // Passwords do not match; authentication failed
        resolve(false);
      }
    });
  });
}

module.exports = {
  hashPassword,
  comparePasswords,
};
