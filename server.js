// Import your dependencies
const express = require('express');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection'); // Import the Sequelize connection
const { Song, User, Playlist, Playlist_song } = require('./models'); // Import your models
const userController = require('./controllers/user-controller'); // Import the user controller

// Import your route modules
const songRoutes = require('./routes/song-routes');
const userRoutes = require('./routes/user-routes');
const playlistRoutes = require('./routes/playlist-routes');
const playlistSongRoutes = require('./routes/playlist_song-routes');

const app = express();
const port = process.env.PORT || 3001; // Use the PORT from environment variables or default to 3001

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Define routes for your models using the imported route modules
app.use('/songs', songRoutes);
app.use('/users', userRoutes);
app.use('/playlists', playlistRoutes);
app.use('/playlist_songs', playlistSongRoutes);

// Serve the yourspace home page
app.get('/', (req, res) => {
  res.redirect('/yourspace');
});

// Serve the yourspace home page
app.get('/yourspace', (req, res) => {
  const htmlPath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(htmlPath);
});

// Define the register route to serve the register form
app.get('/register', (req, res) => {
  // Render the register form here (e.g., by serving a registration.html file)
  res.sendFile(path.join(__dirname, 'views', 'registration.html'));
});

// Define the login route to serve the login form
app.get('/login', (req, res) => {
  // Render the login form here (e.g., by serving a login.html file)
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Serve the music page
app.get('/music', (req, res) => {
  const htmlPath = path.join(__dirname, 'views', 'music.html');
  const apiKey = process.env.YOUR_API_KEY; // Access the API key from the .env file
  res.sendFile(htmlPath);
});

// Serve the API song search. Make the YouTube API request here using the apiKey and searchQuery
// Process the API response and send it back to the client
app.get('/search', (req, res) => {
  const searchQuery = req.query.query;
  const apiKey = process.env.YOUR_API_KEY; // Access the API key from the .env file

  // Make the YouTube API request here using the fetch API
  fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${apiKey}&part=snippet&type=video`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data); // Send the API response back to the client as JSON
    })
    .catch(error => {
      console.error('Error fetching data from YouTube API:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Server-side route to add a song to the user's music list
app.post('/add-to-list', (req, res) => {
  const { title, videoId } = req.body;

  // Add the song to the user's music list (musicList is a data structure in your server.js)
  musicList.push({ title, videoId });

  res.json({ success: true });
});

// Define the login route to handle user login
app.post('/login', userController.loginUser);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});