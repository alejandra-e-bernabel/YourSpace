const express = require('express');
const router = express.Router();

// Handle the Home page route
router.get('/', (req, res) => {
  // Render the Home page content within the main layout
  res.render('../views/home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

// Route to render the signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
