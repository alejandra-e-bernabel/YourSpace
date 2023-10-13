// Populates the model's table with initial data
const { Playlist_song } = require('../models'); // Import the user model from '../models'

// Seed the user data
const Playlist_song = [
  {
    song_id: '1',
    order: '1',
    created_date: '2023-10-05',
  },
 ];

const seedPlaylists = () => User.bulkCreate(playlist_songData); // Corrected the model name to 'user'

module.exports = seedPlaylist_songs;
