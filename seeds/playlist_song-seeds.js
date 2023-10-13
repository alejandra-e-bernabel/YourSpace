// Populates the model's table with initial data
const Playlist_Song = require('../models/Playlist_song');

// Seed the user data
const playlist_songData = [
  {
    song_id: '1',
    order: '1',
    created_date: '2023-10-05',
  },
 ];

const seedPlaylist_songs = () => Playlist_Song.bulkCreate(playlist_songData); // Corrected the model name to 'user'

module.exports = seedPlaylist_songs;
