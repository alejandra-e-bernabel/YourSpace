// const express = require('express');
// const router = express.Router();
// const { User } = require('../models'); 

// // Route to render the login page
// router.get('/login', (req, res) => {
//   console.log('Accessing /login route');
//   res.render('login', { logged_in: req.session.logged_in }); // Check if the session variable is correctly set
// });

// // Route to handle user login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ where: { email } });

//     if (!user || !user.checkPassword(password)) {
//       res.status(401).json({ message: 'Invalid email or password' });
//       return;
//     }

//     // Set session variables upon successful login
//     req.session.save(() => {
//       req.session.user_id = user.id;
//       req.session.logged_in = true;

//       res.status(200).json({ user, message: 'You are now logged in' });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Route to render the signup page
// router.get('/signup', (req, res) => {
//   res.render('signup'); // Assuming you have a "signup.handlebars" view
// });

// // Route to handle user signup
// router.post('/signup', async (req, res) => {
//   try {
//     // Create a new user in the database
//     const userData = await User.create(req.body);

//     // Set session variables upon successful signup
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(201).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { User } = require('../models');


// // Route to render the login page
// router.get('/login', (req, res) => {
//   res.render('login');
// });

// Route to handle user login
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

// // Route to render the signup page
// router.get('/signup', (req, res) => {
//   res.render('signup');
// });

// Route to handle user signup
router.post('/signup', async (req, res) => {
  try {
    // Create a new user in the database
    const userData = await User.create(req.body);

    // Set session variables upon successful signup
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(201).json(userData);
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json(err);
  }
});

//module.exports = router;
