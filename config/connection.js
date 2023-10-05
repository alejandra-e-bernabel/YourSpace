const Sequelize = require('sequelize');

const URI = process.env.MYSQLURI;

const sequelize = new Sequelize(URI, {
dialect: 'mysql', // Specify the dialect you are using (e.g., 'mysql', 'postgres', etc.)
});

module.exports = sequelize;
