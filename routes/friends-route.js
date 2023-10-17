// const router = require("express").Router();
// const Friend = require("../models/friends-model");

// const fs = require("fs").promises;
// const path = require("path");

// router.get("/", async (req, res) => {
//   try {
//     res.sendFile(path.join(process.cwd(), "public/navbar.html"));
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// router.get("/api/data", async (req, res) => {
//   try {
//     const friend = await Friend.findAll();
//     res.json(friend);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get("/friend/:id", (req, res) => {
//   Friend.findByPk(req.params.id)
//     .then((friend) => {
//       if (!friend) {
//         return res.status(404).send("Friend not found");
//       }

//       if (!friend.image_path) {
//         return res.status(404).send("Image not found for this friend");
//       }

//       res.setHeader("Content-Type", "image/jpeg");

//       const imagePath = friend.image_path;
//       res.sendFile(imagePath, { root: "./" });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(500).send("Internal Server Error");
//     });
// });

// router.put("/:id", (req, res) => {
//   Friend.update(req.params.id)
//     .then((friend) => {
//       if (!friend) {
//         return res.status(404).send("Friend not found");
//       }

//       if (!friend.image_path) {
//         return res.status(404).send("Image not found for this friend");
//       }

//       res.setHeader("Content-Type", "image/jpeg");

//       const imagePath = friend.image_path;
//       res.sendFile(imagePath, { root: "./" });
//     })
//     .then((friend) => {
//       res.status(200).json(friend);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(400).json(error);
//       return res.status(500).send("Internal Server Error");
//     });
// });

// router.get("/friend/:id", (req, res) => {
//   Friend.findByPk(req.params.id)
//     .then((friend) => {
//       if (!friend) {
//         return res.status(404).send("Friend not found");
//       }

//       if (!friend.image_path) {
//         return res.status(404).send("Image not found for this friend");
//       }

//       res.setHeader("Content-Type", "image/jpeg");

//       const imagePath = friend.image_path;
//       res.sendFile(imagePath, { root: "./" });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(500).send("Internal Server Error");
//     });
// });

// router.put("/:id", (req, res) => {
//   Friend.update(req.params.id)
//     .then((friend) => {
//       if (!friend) {
//         return res.status(404).send("Friend not found");
//       }

//       if (!friend.image_path) {
//         return res.status(404).send("Image not found for this friend");
//       }

//       res.setHeader("Content-Type", "image/jpeg");

//       const imagePath = friend.image_path;
//       res.sendFile(imagePath, { root: "./" });
//     })
//     .then((friend) => {
//       res.status(200).json(friend);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(400).json(error);
//       return res.status(500).send("Internal Server Error");
//     });
// });

// router.delete("/:id", (req, res) => {
//   Friend.destroy(req.params.id)
//     .then((friend) => {
//       if (!friend) {
//         return res.status(404).send("Friend not found");
//       }

//       if (!friend.image_path) {
//         return res.status(404).send("Image not found for this friend");
//       }

//       res.setHeader("Content-Type", "image/jpeg");

//       const imagePath = friend.image_path;
//       res.sendFile(imagePath, { root: "./" });
//     })
//     .then((friend) => {
//       res.status(200).json(friend);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(400).json(error);
//       return res.status(500).send("Internal Server Error");
//     });
// });

// module.exports = router;
