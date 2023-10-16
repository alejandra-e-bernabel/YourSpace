// Import necessary Sequelize classes and the database connection instance
const { Model, DataTypes } = require('sequelize');

// Define the Friend model by extending the Model class
const sequelize = require('../config/connection');


class Friend extends Model {}

// Initialize column definitions
Friend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    friend_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "friend",
  }
);

module.exports = Friend;