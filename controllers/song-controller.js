const { Song } = require('../models'); // Import your Song model

// Define controller functions for handling song-related routes
const songController = {
  getAllSongs: async (req, res) => {
    try {
      // Query the database for all songs
      const songs = await Song.findAll();

      // Respond with the list of songs in JSON format
      res.json(songs);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Define other controller functions here...
};
// export the controller
module.exports = songController;