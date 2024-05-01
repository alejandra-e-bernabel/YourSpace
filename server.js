require("dotenv").config();
const express = require("express");
const db = require("./config/connection.js");
const mongoose = require("mongoose");
const routes = require("./routes/friends-route.js");


// const Friends = require("./models/friends-model");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});
