// Import necessary Sequelize classes and the database connection instance
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Playlist_Song model by extending the Model class
class Playlist_Song extends Model {}

// Initialize column definitions
Playlist_Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'song', // Referencing the 'song' table
        key: 'id',     // Referencing the 'id' column in the 'song' table
      },
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  // Define Sequelize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist_song', // Correct the modelName to 'playlist_song'
  }
);

// Export the initialized Sequelize model instance
module.exports = Playlist_Song;