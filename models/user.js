const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: String,
    password_hash: String,
    registration_date: Date,
  },
  {
    // Define Mongoose schema configuration options
    timestamps: false,
    collection: "users", // Specify the collection name (optional)
  }
);

// Create the User model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
