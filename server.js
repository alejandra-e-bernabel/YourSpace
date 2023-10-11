require("dotenv").config();
const express = require("express");
const routes = require("./routes/friends-route.js");
const sequelize = require("./config/connection.js");

const Friends = require("./models/friends-model");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
