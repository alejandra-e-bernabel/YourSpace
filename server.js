//updated 0547 10/17 tpf

// import dependencies
const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection'); // Import the Sequelize connection
const User = require('./models/user') // Import your models
const Playlist = require('./models/playlist'); // Import your models
const authController = require('./controllers/authController'); // Import your auth controller
const friendController = require('./controllers/friendController'); // Import your friend controller

const fs = require('fs');
const getTimeAndDate = require("./public/js/timeandDate.js");
const getLikesandDislikes = require("./public/js/likesAndDislikes.js");
//unique ID generator
const { v4: uuidv4 } = require('uuid');
// call using uuidv4();

const app = express();
const PORT = process.env.PORT || 4000;

// Serve express and json data functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve the session
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: true,
}));

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/')));

// Define the controllers
app.use('/auth', authController);
// app.use('/friend', friendController);

// Define the yourspace route to serve the login form
app.get('/yourspace', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define the login route to serve the login form
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define the default route to serve the login form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// get user data for authentication
app.get('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id; // Retrieve the user ID from the URL
    const user = await User.findByPk(userId); // Use findByPk to find the user by ID
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the register new user route
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registration.html'));
});

// Serve the music page
app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'music.html'));
});

// Query the playlist table
app.get('/get-playlist', async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    console.log('Playlist data retrieved successfully:', playlists);
    res.json(playlists);
  } catch (error) {
    console.error('Error fetching playlist data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the friend route to get a friend by ID
// app.get('/friend/:id', async (req, res) => {
//   try {
//     console.log('server: getting /friend/id');
//     const friendId = req.params.id; // Retrieve the friend's ID from the URL
//     // Query the database or perform other logic to retrieve the friend by ID
//     // Example: const friend = await FriendModel.findByPk(friendId);
//     // res.json(friend);
//   } catch (error) {
//     console.error('Error fetching friend data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// localhost:4000/blog will take us to /public/blog.html
app.get("/blog", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/blog.html"))
);

// // localhost:4000/api/blog will display saved blog posts JSON
app.get("/api/blog", (req, res) => {
  fs.readFile("./db/blog.json", "utf-8", (err, data) => {
    if (err) throw err;
    const blogData = JSON.parse(data);
    res.json(blogData);
  });
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
    for (let i = 0; i < currentPosts.length; i++) {
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
  });
})
//*******************************************************************
// says what happens when the user provides a POST request
app.post("/api/blog", (req, res) => {
  let response;
  // making sure the post has title and text
  if (req.body.title && req.body.text) {
    response = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(), // give item ID, this will help with displaying and deleting saved notes.
      datePosted: getTimeAndDate(),
      likes: getLikesandDislikes.randomLikes(),
      dislikes: getLikesandDislikes.randomDislikes(),
    };

    res.json("Blog post with title " + response.title + " has been added");

    // check current blog.json
    fs.readFile("./db/blog.json", "utf-8", (err, data) => {
      if (err) throw err;

      // parse current notes JSON, string ---> JSON object
      const originalNotes = JSON.parse(data);
      // add a new note to originalNotes JSON object
      originalNotes.push(response);
      // stringify noteString to pass it back to blog.json, JSON ---> string
      const noteString = JSON.stringify(originalNotes);

      // write new noteString to blog.json
      fs.writeFile(`./db/blog.json`, noteString, (err) =>
        err
          ? console.error(err)
          : console.log("Blog post with title " + response.title + " has been added")
      );
    });
  }
});

// Start the server outside of the app.post block
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});