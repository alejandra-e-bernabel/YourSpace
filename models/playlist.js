// Import necessary Sequelize classes and the database connection instance
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Playlist model by extending the Model class
class Playlist extends Model {}

// CREATE TABLE playlist (

//   description TEXT,
//   song_title VARCHAR(255),
//   video_id VARCHAR(255),
//   user_id INT, -- Foreign Key referencing the user who created the playlist
//   playlist_id INT, -- Foreign Key referencing the playlist that contains the song
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id), -- Reference to the users table
//   FOREIGN KEY (playlist_id) REFERENCES playlists(id) -- Reference to the playlists table
// );

// Initialize column definitions
Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    playlist_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    song_title: {
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
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
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
