const router = require('express').Router();
const Friend = require("../models/friends-model.js");


// const fs = require("fs");

// router.get("/", (req, res) => {
//   const htmlPath = "./public/navbar.html";
//   const friendsCssPath = "./css/friends.css";
//   const navbarCssPath = "./css/navbar.css";
//   const images = "./images/space.jpg"

//   Friend.findAll()
//     .then((friend) => {
//       fs.readFile(htmlPath, "utf8", (error, data) => {
//         if (error) {
//           console.log(error);
//           res.status(500).send("Internal Server Error");
//         } else {
//           fs.readFile(friendsCssPath, "utf8", (err, friendsCssContent) => {
//             if (error) {
//               console.log(error);
//             } else {
//               fs.readFile(navbarCssPath, "utf8", (err, navbarCssContent) => {
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   fs.readFile(images, (err, spaceImage) => {
//                     if (error) {
//                       console.log(error);
//                     } else {
//                       const base64Image =
//                         Buffer.from(spaceImage).toString("base64");
//                       const finalHtml = `
//           <style>${friendsCssContent}</style>
//           <style>${navbarCssContent}</style>
//           ${data}`;
//                       <img
//                         src="data:image/jpeg;base64,${base64Image}"
//                         alt="Space Image"
//                       ></img>;
//                       res.setHeader("Content-Type", "text/html");
//                       res.send(finalHtml);
//                     }
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).send("Internal Server Error");
//     });
// });

// const fs = require("fs").promises;
// const path = require("path");

// router.get("/", async (req, res) => {
//   try {
//     const [htmlContent, friendsCssContent, navbarCssContent] =
//       await Promise.all([
//         fs.readFile("./public/navbar.html", "utf8"),
//         fs.readFile("./css/friends.css", "utf8"),
//         fs.readFile("./css/navbar.css", "utf8"),
//       ]);

//     const imagesFolder = "./images";
//     const imageFiles = await fs.readdir(imagesFolder);

//     const imageTags = imageFiles
//       .map((filename) => {
//         const imagePath = path.join(imagesFolder, filename);
//         return `<img src="${imagePath}" alt="${filename}">`;
//       })
//       .join("");

//     const finalHtml = `
//       <style>${friendsCssContent}</style>
//       <style>${navbarCssContent}</style>
//       ${htmlContent}
//       ${imageTags}
//     `;

//     res.setHeader("Content-Type", "text/html");
//     res.send(finalHtml);

//     const friend = await Friend.findAll();
//     res.json(friend);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server Error");
//   }
// });


const fs = require("fs").promises;
const path = require("path");

router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(process.cwd(), "public/navbar.html"));
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/api/data", async (req, res) => {
  try {
    const friend = await Friend.findAll();
    res.json(friend);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




router.get("/friend/:id", (req, res) => {
  Friend.findByPk(req.params.id)
    .then((friend) => {
      if (!friend) {
        return res.status(404).send("Friend not found");
      }

      if (!friend.image_path) {
        return res.status(404).send("Image not found for this friend");
      }

      res.setHeader("Content-Type", "image/jpeg");

   
      const imagePath = friend.image_path;
      res.sendFile(imagePath, { root: "./" });

    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    });
});

router.put('/:id', (req, res) => {
   Friend.update(req.params.id)
    .then((friend) => {
      if (!friend) {
        return res.status(404).send("Friend not found");
      }

      if (!friend.image_path) {
        return res.status(404).send("Image not found for this friend");
      }

      res.setHeader("Content-Type", "image/jpeg");

   
      const imagePath = friend.image_path;
      res.sendFile(imagePath, { root: "./" });

    }).then((friend) => {
    res.status(200).json(friend);
    })
    .catch((error) => {
      console.log(error);
       res.status(400).json(error);
      return res.status(500).send("Internal Server Error");
    });
});

=======
router.get("/friend/:id", (req, res) => {
  Friend.findByPk(req.params.id)
    .then((friend) => {
      if (!friend) {
        return res.status(404).send("Friend not found");
      }

      if (!friend.image_path) {
        return res.status(404).send("Image not found for this friend");
      }

      res.setHeader("Content-Type", "image/jpeg");

   
      const imagePath = friend.image_path;
      res.sendFile(imagePath, { root: "./" });

    })
    .catch((error) => {
      console.log(error);
      return res.status(500).send("Internal Server Error");
    });
});

router.put('/:id', (req, res) => {
   Friend.update(req.params.id)
    .then((friend) => {
      if (!friend) {
        return res.status(404).send("Friend not found");
      }

      if (!friend.image_path) {
        return res.status(404).send("Image not found for this friend");
      }

      res.setHeader("Content-Type", "image/jpeg");

   
      const imagePath = friend.image_path;
      res.sendFile(imagePath, { root: "./" });

    }).then((friend) => {
    res.status(200).json(friend);
    })
    .catch((error) => {
      console.log(error);
       res.status(400).json(error);
      return res.status(500).send("Internal Server Error");
    });
});

router.delete("/:id", (req, res) => {
  Friend.destroy(req.params.id)
    .then((friend) => {
      if (!friend) {
        return res.status(404).send("Friend not found");
      }

      if (!friend.image_path) {
        return res.status(404).send("Image not found for this friend");
      }

      res.setHeader("Content-Type", "image/jpeg");

      const imagePath = friend.image_path;
      res.sendFile(imagePath, { root: "./" });
    })
    .then((friend) => {
      res.status(200).json(friend);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
      return res.status(500).send("Internal Server Error");
    });
});


module.exports = router;