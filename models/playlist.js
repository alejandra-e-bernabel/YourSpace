
const mongoose = require("mongoose");

// Define the Playlist schema
const playlistSchema = new mongoose.Schema(
  {
    playlist_title: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the 'User' model
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // Define Mongoose schema configuration options
    timestamps: false,
    collection: "playlists", // Specify the collection name (optional)
  }
);

// Create the Playlist model based on the schema
const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
