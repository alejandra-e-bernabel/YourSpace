
const mongoose = require("mongoose");

// Define the Song schema
const songSchema = new mongoose.Schema(
  {
    song_name: {
      type: String,
      required: true,
    },
    duration: Number,
    artist_name: String,
    genre: String,
    release_date: Date,
  },
  {
    // Define Mongoose schema configuration options
    timestamps: false,
    collection: "songs", // Specify the collection name (optional)
  }
);

// Create the Song model based on the schema
const Song = mongoose.model("Song", songSchema);

module.exports = Song;
