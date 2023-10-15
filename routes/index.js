// import dependencies
const router = require('express').Router();
const playlistRoutes = require('./playlist-routes');
// const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
// const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes); // Home route
router.use('/user', userRoutes); // User-related routes

// Mount the userRoutes
router.use('/users', userRoutes);

// Mount the playlistRoutes
router.use('/playlists', playlistRoutes);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({ message: 'Internal Server Error' }); // Send an appropriate error response
});

module.exports = router;


      
