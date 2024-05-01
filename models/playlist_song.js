const mongoose = require("mongoose");

// Define the Playlist schema
const playlistSchema = new mongoose.Schema({
  song_title: {
    type: String,
    required: true,
  },
  artist: String,
  audio_path: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing the 'User' model
  },
});

// Create the Playlist model based on the schema
const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
