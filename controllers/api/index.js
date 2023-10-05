const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;