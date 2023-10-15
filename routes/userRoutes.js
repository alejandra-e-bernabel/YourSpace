const router = require('express').Router();
const { User } = require('../models');

// Route to create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(201).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user || !user.checkPassword(password)) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Set session variables upon successful login
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(200).json({ user, message: 'You are now logged in' });
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json(err);
  }
});