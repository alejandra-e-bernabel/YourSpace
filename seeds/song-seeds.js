// Populates the model's table with initial data (songs) by calling the seedSongs function.
const { Song } = require('../models'); // Import the Song model from '../models'

// Seed the song data
const songData = [
  {
    song_name: 'Bohemian Rhapsody',
    duration: 355,
    artist_name: 'Queen',
    genre: 'Rock',
    release_date: '1975-10-31',
  },
  {
    song_name: 'Billie Jean',
    duration: 294,
    artist_name: 'Michael Jackson',
    genre: 'Pop',
    release_date: '1983-01-02',
  },
  {
    song_name: 'Lose Yourself',
    duration: 326,
    artist_name: 'Eminem',
    genre: 'Hip-Hop',
    release_date: '2002-10-22',
  },
  {
    song_name: 'Take Me Home, Country Roads',
    duration: 195,
    artist_name: 'John Denver',
    genre: 'Country',
    release_date: '1971-04-12',
  },
  {
    song_name: 'Strobe',
    duration: 658,
    artist_name: 'Deadmau5',
    genre: 'Electronic/Dance',
    release_date: '2009-09-17',
  },
];

const seedSongs = () => Song.bulkCreate(songData); // Corrected the model name to 'Song'

module.exports = seedSongs;
