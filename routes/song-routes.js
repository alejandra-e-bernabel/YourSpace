const router = require('express').Router();
const Song = require('../models/Song'); // Specify the model file explicitly

// Define routes for songs

// Get all songs
router.get('/', (req, res) => {
  Song.findAll()
    .then((songs) => res.json(songs))
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Get one song by ID
router.get('/:id', (req, res) => {
  Song.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((song) => {
      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
      }
      return res.json(song);
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Create a new song
router.post('/', (req, res) => {
  Song.create(req.body)
    .then((song) => res.status(201).json(song)) // Use 201 for resource creation
    .catch((err) =>
      res.status(400).json({ error: 'Bad request', details: err })
    );
});

// Update a song by ID
router.put('/:id', (req, res) => {
  Song.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(([updatedRows]) => {
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Song not found' });
      }
      return res.status(200).json({ message: 'Song updated successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Delete a song by ID
router.delete('/:id', (req, res) => {
  Song.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRows) => {
      if (deletedRows === 0) {
        return res.status(404).json({ error: 'Song not found' });
      }
      return res.status(200).json({ message: 'Song deleted successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

module.exports = router;