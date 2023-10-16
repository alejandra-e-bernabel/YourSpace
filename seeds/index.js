//automates the process of initializing and seeding a database with initial data.

// import dependencie
const seedUsers = require('./user-seeds');
const seedPlaylists = require('./playlist-seeds');
const seedFriends = require('./friend-seeds');
const sequelize = require('../config/connection');  // import sequelize from '../config/connection.js';


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPlaylists();
    console.log('\n----- PLAYLISTS SEEDED -----\n');

    await seedFriends();
    console.log('\n----- FRIENDS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedAll();
// Collapse










