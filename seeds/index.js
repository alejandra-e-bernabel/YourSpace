// Import dependencies
const seedFriends = require("./friends-seeds");
const mongoose = require("mongoose");

// Connect to MongoDB (replace 'mongodb://localhost/yourdatabase' with your MongoDB connection URI)
mongoose
  .connect("mongodb://localhost/yourdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("\n----- DATABASE CONNECTED -----\n");
    // Call the seeding function
    seedAll();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

// Define the seeding function
const seedAll = async () => {
  try {
    // Call the seeding function for each collection
    await seedFriends();
    console.log("\n----- FRIENDS SEEDED -----\n");

    // Exit the process
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};
