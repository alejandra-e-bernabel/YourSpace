// Populates the model's table with initial data
const { Playlist } = require('../models'); // Import the user model from '../models'

// Seed the user data
const Playlist = [
  {
    playlist_title: 'eclectic',
    user_id: 'Tom',
    created_date: '2023-10-05',
  },
 ];

const seedPlaylists = () => User.bulkCreate(playlistData); // Corrected the model name to 'user'

module.exports = seedPlaylists;
