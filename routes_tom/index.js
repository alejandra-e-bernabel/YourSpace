// import dependencies
const router = require('express').Router();
const songRoutes = require('./song-routes');
const userRoutes = require('./user-routes');
const playlistRoutes = require('./playlist-routes');
const playlist_songRoutes = require('./playlist_song-routes');

// Mount the songRoutes
router.use('/songs', songRoutes);

// Mount the userRoutes
router.use('/users', userRoutes);

// Mount the playlistRoutes
router.use('/playlists', playlistRoutes);

// Mount the playlistRoutes
router.use('/playlist_songRoutes', playlist_songRoutes);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({ message: 'Internal Server Error' }); // Send an appropriate error response
});

module.exports = router;
