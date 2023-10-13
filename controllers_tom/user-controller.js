// import dependencies
const { User } = require('../models');

const userController = {
  // ... (other controller functions)

  // Controller function for user login
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Query the database to get the user's information
      const user = await User.findOne({ where: { user_name: username } });

      console.log('usercontroller: Retrieved user data from Sequelize query:', user);

      if (user) {
        // Compare the provided password with the stored password (plain text)
        if (user.password_hash === password) {
          // Authentication successful; create a session or token here
          req.session.user = username; // Store the user in the session
          res.redirect('/'); // Redirect to the homepage or any desired page
        } else {
          // Authentication failed; display an error message
          res.send('usercontroller: Invalid username or password');
        }
        
      } else {
        // User not found; display an error message
        res.send('User not found');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
}
// export the userController
module.exports = userController;