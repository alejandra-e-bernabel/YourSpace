require("dotenv").config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const { User } = require ('./models');

const app = express();
const port = process.env.PORT || 4000;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});

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
    db: sequelize
  })
};

app.use(session(sess));
console.log('Session middleware configured');

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static files middleware configured');

// Use authRoutes for routes starting with /auth
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);


app.use(routes);
console.log('Routes middleware configured');

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Now listening on port ${port}`));
});


// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error
  res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error message
});






