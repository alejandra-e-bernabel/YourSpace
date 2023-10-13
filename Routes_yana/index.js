const router = require('express').Router();
// const router = express.Router();
​
// Importing other route files
// const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');
​
// Mount route files
router.use('/', homeRoutes); // Home route
router.use('/user', userRoutes); // User-related routes
​
​
module.exports = router;