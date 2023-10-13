const { Playlist } = require('../models'); // Import your model

// Define controller functions for handling song-related routes
const playlistController = {
  getAllPlaylists: async (req, res) => {
    try {
      // Query the database for all songs
      const songs = await Playlist.findAll();

      // Respond with the list of songs in JSON format
      res.json(playlists);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Define other controller functions here...
};
// export the controller
module.exports = playlistController;