// Populates the model's table with initial data
const { User } = require('../models'); // Import the user model from '../models'

// Seed the user data
const User = [
  {
    user_name: 'Ale',
    email: 'ira@roamradar.atlassian.net',
    password_hash: 'xxx',
    registration_date: '2023-10-05',
  },
  {
    user_name: 'Mads',
    email: 'abraham.madeleine229@gmail.com',
    password_hash: 'xxx',
    registration_date: '2023-10-05',
  },
  {
    user_name: 'Nicky',
    email: 'ira@roamradar.atlassian.net',
    password_hash: 'xxx',
    registration_date: '2023-10-05',
  },
  {
    user_name: 'Yana',
    email: 'yana.mishina.92@gmail.com',
    password_hash: 'xxx',
    registration_date: '2023-10-05',    
  },
  {
    user_name: 'Tom',
    email: 'smokerdog57@gmail.com',
    password_hash: 'xxx',
    registration_date: '2023-10-05',    
  },
];

const seedUsers = () => User.bulkCreate(userData); // Corrected the model name to 'user'

module.exports = seedUsers;
