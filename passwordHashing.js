const bcrypt = require('bcrypt');
const saltRounds = 10; // You can adjust the number of salt rounds
const plainTextPasswords = ['Big1blue!', 'yourspace'];

const hashedPasswords = plainTextPasswords.map((plainTextPassword) => {
  return bcrypt.hashSync(plainTextPassword, saltRounds);
});

// Store the `hashedPasswords` in your database

console.log('Hashed and salted passwords:', hashedPasswords);