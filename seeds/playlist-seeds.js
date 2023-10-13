// Populates the model's table with initial data
const { Playlist } = require('../models'); // Import the model from '../models'

// Seed the user data
const playlistData = [
  {
    playlist_title: 'eclectic',
    user_id: 5,
    created_date: '2023-10-05',
  },
 ];

const seedPlaylists = () => Playlist.bulkCreate(playlistData); 

module.exports = seedPlaylists;
