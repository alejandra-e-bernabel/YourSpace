const router = require('express').Router();
const Playlist_song = require('../models/Playlist_song'); // Specify the model file explicitly

// Define routes for playlist_songs

// Get all playlist_songs
router.get('/', (req, res) => {
  Playlist_song.findAll()
    .then((playlist_songs) => res.json(playlist_songs))
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Get one playlist_song by ID
router.get('/:id', (req, res) => {
  Playlist_song.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((playlist_song) => {
      if (!playlist_song) {
        return res.status(404).json({ error: 'Playlist_song not found' });
      }
      return res.json(playlist_song);
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Create a new playlist_song
router.post('/', (req, res) => {
  Playlist_song.create(req.body)
    .then((playlist_song) => res.status(201).json(playlist_song)) // Use 201 for resource creation
    .catch((err) =>
      res.status(400).json({ error: 'Bad request', details: err })
    );
});

// Update a playlist_song by ID
router.put('/:id', (req, res) => {
  Playlist_song.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(([updatedRows]) => {
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Playlist_song not found' });
      }
      return res.status(200).json({ message: 'Playlist_song updated successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Delete a playlist_song by ID
router.delete('/:id', (req, res) => {
  Playlist_song.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRows) => {
      if (deletedRows === 0) {
        return res.status(404).json({ error: 'Playlist_song not found' });
      }
      return res.status(200).json({ message: 'Playlist_song deleted successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

module.exports = router;