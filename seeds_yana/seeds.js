const mongoose = require("mongoose");
const { User, Project } = require("../models");
const userData = require("./userData.json");
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB (replace 'mongodb://localhost/yourdatabase' with your MongoDB connection URI)
    await mongoose.connect("mongodb://localhost/yourdatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("\n----- DATABASE CONNECTED -----\n");

    // Clear existing data in the collections
    await User.deleteMany({});
    await Project.deleteMany({});

    // Seed users
    const users = await User.create(userData);

    // Seed projects (if applicable)
    // for (const project of projectData) {
    //   await Project.create({
    //     ...project,
    //     user_id: users[Math.floor(Math.random() * users.length)].id,
    //   });
    // }

    console.log("\n----- DATABASE SEEDED -----\n");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedDatabase();
