const express = require('express');
const router = express.Router();

// Handle the Home page route
router.get('/', (req, res) => {
  // Render the Home page content within the main layout
  res.render('../views/layouts/main');
});

module.exports = router;
