// collect all the individual Sequelize models representing database tables) and export them as a single object 
// so that they can be easily imported and used in other parts of the application.

const Playlist = require('./Playlist');
const User = require('./User');

// export models
module.exports = {
    User,
    Playlist,
  };