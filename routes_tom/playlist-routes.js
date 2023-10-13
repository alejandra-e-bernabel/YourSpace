const router = require('express').Router();
const Playlist = require('../models/Playlist'); // Specify the model file explicitly

// Define routes for playlists

// Get all playlists
router.get('/', (req, res) => {
  Playlist.findAll()
    .then((playlists) => res.json(playlists))
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Get one playlist by ID
router.get('/:id', (req, res) => {
  Playlist.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((playlist) => {
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      return res.json(playlist);
    })
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

// Update a playlist by ID
router.put('/:id', (req, res) => {
  Playlist.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(([updatedRows]) => {
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      return res.status(200).json({ message: 'Playlist updated successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Delete a playlist by ID
router.delete('/:id', (req, res) => {
  Playlist.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRows) => {
      if (deletedRows === 0) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
      return res.status(200).json({ message: 'Playlist deleted successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

module.exports = router;