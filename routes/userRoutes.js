//dealing with new users and profiles 

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

// Route to handle user signup
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
//     console.error(err); // Log the error for debugging
//     res.status(400).json(err);
//   }
// });

// Route to get user profile
// router.get('/profile', async (req, res) => {
//   try {
//     const userId = req.session.user_id;

//     if (!userId) {
//       res.status(401).json({ message: 'Unauthorized' });
//       return;
//     }

//     const user = await User.findByPk(userId);

//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Route to update user profile
// router.put('/profile', async (req, res) => {
//   try {
//     const userId = req.session.user_id;

//     if (!userId) {
//       res.status(401).json({ message: 'Unauthorized' });
//       return;
//     }

//     const [updated] = await User.update(req.body, {
//       where: { id: userId },
//     });

//     if (updated) {
//       res.status(200).json({ message: 'Profile updated successfully' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;

