const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !user.checkPassword(password)) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(200).json({ user, message: 'You are now logged in' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
