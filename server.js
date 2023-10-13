// Import your dependencies
const express = require('express');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection'); // Import the Sequelize connection
const { Song, User, Playlist, Playlist_song } = require('./models'); // Import your models
const userController = require('./controllers/user-controller'); // Import the user controller

// *******************YANA ROUTES AND DEPENDENCIES
require('dotenv').config();
const exphbs = require('express-handlebars');
const routes = require('./routes');

// const { User } = require('./models');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// *******************END OF YANA's ROUTES AND DEPENDENCIES


//******************* NICOLE's ROUTES AND DEPENDENCIES
const routes = require("./routes/friends-route.js");
const Friends = require("./models/friends-model");

//****************** END OF NICOLE's ROUTESS AND DEPENDENCIES

//******************* ALEJANDRA's ROUTES AND DEPENDENCIES

const fs = require('fs');
const getTimeAndDate = require ("./public/assets/js/timeandDate.js");
const getLikesandDislikes = require("./public/assets/js/likesAndDislikes.js");

//unique ID generator
const { v4: uuidv4 } = require('uuid');
// call using uuidv4();

//******************* END OF ALEJANDRA's ROUTES AND DEPENDENCIES


// Import your route modules
const songRoutes = require('./routes/song-routes');
const userRoutes = require('./routes/user-routes');
const playlistRoutes = require('./routes/playlist-routes');
const playlistSongRoutes = require('./routes/playlist_song-routes');

const app = express();
const port = process.env.PORT || 3001; // Use the PORT from environment variables or default to 3001

// ***********************YANA MIDDLEWARE

// Template Engine Middleware
const hbs = exphbs.create({});

// Session Middleware
const sess = {
  secret: process.env.SESSIONSECRET || 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Static Files Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//***********************END OF YANA MIDDLEWARE

// **********************NICOLE's MIDDLEWARE

app.use(express.static("public-nicole"));

// **********************END NICOLE's MIDDLEWARE

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

//****************ALEJANDRA DEFINED routes, GETS, DELETES POSTS

// localhost:3001/blog will take us to /public/blog.html
app.get("/blog", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/blog.html"))
);

// localhost:3001/api/blog will display saved blog posts JSON
app.get("/api/blog", (req, res) => {
    fs.readFile("./db/blog.json", "utf-8", (err, data) => {
        if (err) throw err;
        const blogData = JSON.parse(data);
        res.json(blogData);
      });
});

//backup path. Any other get request not listed above will take user to /public/index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//says what happens when user provides a delete request.
app.delete("/api/blog/:id", (req, res) => {
    //read current notes
    fs.readFile("./db/blog.json", "utf-8", (err, data) => {
        if (err) throw err;
        //save request parameter as deleteID
        const deleteID = req.params.id;
        //parse currentPosts string ---> JSON objest
        let currentPosts = JSON.parse(data);

        //iterate through currentPosts. Any with the same ID as requested will be spliced from the JSON file.
        for (let i=0; i<currentPosts.length; i++) {
            if (deleteID === currentPosts[i].id) {
                currentPosts.splice(i, 1);
            }
        };

        //stringify current notes JSON ---> string
        currentPosts = JSON.stringify(currentPosts);

        //provide request response to user
        res.send("Note has been deleted");

        //update current notes to blog.json file
        fs.writeFile(`./db/blog.json`, currentPosts, (err) =>
            err
                ? console.error(err)
                : console.log(
                    "Object deleted!"
                )
        );
    })
})

//says what happens when user provides a POST request
app.post("/api/blog", (req, res) => {
    let response;
    //making sure post has title and text
    if (req.body.title && req.body.text) {
        response = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),  //give item ID, this will help with displaying and deleting saved notes.
            datePosted : getTimeAndDate(),
            likes : getLikesandDislikes.randomLikes(),
            dislikes : getLikesandDislikes.randomDislikes()
        };

        res.json("Blog post with title " + response.title + " has been added")

        //check current blog.json
        fs.readFile("./db/blog.json", "utf-8", (err, data) => {
            if (err) throw err;

            //parse current notes JSON, string ---> JSON object
            const originalNotes = JSON.parse(data);
            //add new note to originalNotes JSON object
            originalNotes.push(response);
            //stringify noteString to pass it back to blog.json, JSON ---> string
            const noteString = JSON.stringify(originalNotes);

            //write new noteString to blog.json
            fs.writeFile(`./db/blog.json`, noteString, (err) =>
                err
                    ? console.error(err)
                    : console.log(
                        "Blog post with title " + response.title + " has been added"
                    )
            );
        })
    }
    //in case user enters a get request that does not contain title and text
    else {
        res.json("Request body must contain a title and text");
    }
});

//****************END OF ALEJANDRA DEFINED routes, GETS, DELETES POSTS


//****************YANA START SERVER
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`Now listening on port ${port}`));
  });

//****************YANA END OF START SERVER