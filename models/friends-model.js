const mongoose = require("mongoose");

// Define the Friend schema
const friendSchema = new mongoose.Schema(
  {
    friend_name: {
      type: String,
      required: true,
    },
    image_path: {
      type: String,
      required: true,
    },
  },
  {
    // Define Mongoose schema configuration options
    timestamps: false,
    collection: "friends", // Specify the collection name (optional)
  }
);

// Create the Friend model based on the schema
const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
