
​
// Import Sequelize library for database connection
const Sequelize = require('sequelize');

// Import necessary modules and load environment variables from .env file
require('dotenv').config();


const URI = process.env.MYSQL  // *fix this

// Create a Sequelize instance to connect to the MySQL database
// Check if a JAWSDB_URL is available (for hosting platforms like Heroku)
// If JAWSDB_URL is available, use it; otherwise, use local environment variables
let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is available, use it
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use local environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;