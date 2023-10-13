// Import necessary modules and load environment variables from .env file
require('dotenv').config();

// Import Sequelize library for database connection
const Sequelize = require('sequelize');

// Create a Sequelize instance to connect to the MySQL database
// Check if a JAWSDB_URL is available (for hosting platforms like Heroku)
// If JAWSDB_URL is available, use it; otherwise, use local environment variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;
