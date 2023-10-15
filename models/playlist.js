// Import necessary Sequelize classes and the database connection instance
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Playlist model by extending the Model class
class Playlist extends Model { }

// Initialize column definitions
Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audio_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER, // Assuming user_id is an integer
      allowNull: true,
      references: {
        model: 'user', // Referencing the 'user' table
        key: 'id',      // Referencing the 'id' column in the 'user' table
      },
    },
  },
  // Define Sequelize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist',
  }
);

// Export the initialized Sequelize model instance
module.exports = Playlist;