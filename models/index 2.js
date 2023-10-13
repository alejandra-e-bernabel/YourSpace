// collect all the individual Sequelize models representing database tables) and export them as a single object 
// so that they can be easily imported and used in other parts of the application.

const Song = require('./Song');
const User = require('./User');
const Playlist = require('./Playlist');
const Playlist_song = require('./Playlist_song');

// export models
module.exports = {
    Song,
    User,
    Playlist,
    Playlist_song,
  };