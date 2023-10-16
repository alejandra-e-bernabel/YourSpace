// Populates the model's table with initial data
const { User } = require('../models'); // Import the model from '../models'

// Seed the user data
const userData = [
  {
    name: 'Ale',
    email: 'ale@gmail.com',  // fictitious, needs update
    password_hash: '$2b$10$A43MYAH1JXmFNQOGUtUrbubRmU7DVkgFNU.aZncmJOwNz7oD/2U3u',
    registration_date: '2023-10-05',
  },
  {
    name: 'Mads',
    email: 'abraham.madeleine229@gmail.com',
    password_hash: '$2b$10$A43MYAH1JXmFNQOGUtUrbubRmU7DVkgFNU.aZncmJOwNz7oD/2U3u',
    registration_date: '2023-10-05',
  },
  {
    name: 'Nicky',
    email: 'nicky@gmail.com', // fictitious, needs update
    password_hash: '$2b$10$A43MYAH1JXmFNQOGUtUrbubRmU7DVkgFNU.aZncmJOwNz7oD/2U3u',
    registration_date: '2023-10-05',
  },
  {
    name: 'Yana',
    email: 'yana.mishina.92@gmail.com',
    password_hash: '$2b$10$A43MYAH1JXmFNQOGUtUrbubRmU7DVkgFNU.aZncmJOwNz7oD/2U3u',
    registration_date: '2023-10-05',    
  },
  {
    name: 'Tom',
    email: 'smokerdog57@gmail.com',
    password_hash: '$2b$10$A43MYAH1JXmFNQOGUtUrbubRmU7DVkgFNU.aZncmJOwNz7oD/2U3u',
    registration_date: '2023-10-05', 
  },
];

const seedUsers = () => User.bulkCreate(userData); 

module.exports = seedUsers;
