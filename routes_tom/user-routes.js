const router = require('express').Router();
const User = require('../models/User'); // Specify the model file explicitly

// Define routes for users

// Get all users
router.get('/', (req, res) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Get one user by ID
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Create a new user
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user)) // Use 201 for resource creation
    .catch((err) =>
      res.status(400).json({ error: 'Bad request', details: err })
    );
});

// Update a user by ID
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(([updatedRows]) => {
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json({ message: 'User updated successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedRows) => {
      if (deletedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json({ message: 'User deleted successfully' });
    })
    .catch((err) =>
      res.status(500).json({ error: 'Internal server error', details: err })
    );
});

module.exports = router;