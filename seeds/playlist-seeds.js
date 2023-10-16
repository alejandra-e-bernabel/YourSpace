// Populates the model's table with initial data
const { Playlist } = require('../models'); // Import the model from '../models'

// Seed the user data
const playlistData = [
  {
    song_title: 'Country Roads',
    artist: 'John Denver',
    audio_path: '/audio/countryroads.mp3',
    user_id: 5,
  },
  {
    song_title: 'Duele El Corazon',
    artist: 'Enrique Iglesias',
    audio_path: '/audio/DUELE_EL_CORAZON.mp3',
    user_id: 5,
  },
 ];

const seedPlaylists = () => Playlist.bulkCreate(playlistData); 

module.exports = seedPlaylists;