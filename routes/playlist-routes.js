const router = require('express').Router();
const Playlist = require('../models/playlist'); // Specify the model file explicitly

// Define routes for playlists

// Get playlist
router.get('/get-playlist', (req, res) => {
  Playlist.findAll()
    .then((playlists) => res.json(playlists))
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Create a new playlist
router.post('/', (req, res) => {
  Playlist.create(req.body)
    .then((playlist) => res.status(201).json(playlist)) // Use 201 for resource creation
    .catch((err) =>
      res.status(400).json({ error: 'Bad request', details: err })
    );
});

module.exports = router;


