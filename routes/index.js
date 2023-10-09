const express = require('express');
const router = express.Router();

// Importing other route files
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');

// Mount route files
router.use('/auth', authRoutes); // Authentication-related routes
router.use('/user', userRoutes); // User-related routes
router.use('/', homeRoutes); // Home route

module.exports = router;
