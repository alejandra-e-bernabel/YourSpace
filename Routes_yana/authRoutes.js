const express = require('express');
const router = express.Router();
const { User } = require('../models');
​
// Route to create a new user
router.post('/create', async (req, res) => {
  try {
    const userData = await User.create(req.body);
​
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
​
      res.status(201).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
​
// Route to get user profile
router.get('/profile', async (req, res) => {
  try {
    const userId = req.session.user_id;
​
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
​
    const user = await User.findByPk(userId);
​
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
​
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});
​
// Route to update user profile
router.put('/profile', async (req, res) => {
  try {
    const userId = req.session.user_id;
​
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
​
    const [updated] = await User.update(req.body, {
      where: { id: userId },
    });
​
    if (updated) {
      res.status(200).json({ message: 'Profile updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
​
module.exports = router;