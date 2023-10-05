const express = require("express");
const path = require("path");
const fs = require('fs');

//unique ID generator
const { v4: uuidv4 } = require('uuid');
// call using uuidv4();

//listening on port 3001
const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware to use public folder.
app.use(express.static("public"));

// localhost:3001/blog will take us to /public/blog.html
app.get("/blog", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/blog.html"))
);

// localhost:3001/api/blog will display saved blog posts JSON
app.get("/api/blog", (req, res) => {
    fs.readFile("./db/blog.json", "utf-8", (err, data) => {
        if (err) throw err;
        const blogData = JSON.parse(data);
        res.json(blogData);
      });
});

//backup path. Any other get request not listed above will take user to /public/index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

//says what happens when user provides a delete request.
app.delete("/api/blog/:id", (req, res) => {
    //read current notes
    fs.readFile("./db/blog.json", "utf-8", (err, data) => {
        if (err) throw err;
        //save request parameter as deleteID
        const deleteID = req.params.id;
        //parse currentPosts string ---> JSON objest
        let currentPosts = JSON.parse(data);

        //iterate through currentPosts. Any with the same ID as requested will be spliced from the JSON file.
        for (let i=0; i<currentPosts.length; i++) {
            if (deleteID === currentPosts[i].id) {
                currentPosts.splice(i, 1);
            }
        };

        //stringify current notes JSON ---> string
        currentPosts = JSON.stringify(currentPosts);

        //provide request response to user
        res.send("Note has been deleted");

        //update current notes to blog.json file
        fs.writeFile(`./db/blog.json`, currentPosts, (err) =>
            err
                ? console.error(err)
                : console.log(
                    "Object deleted!"
                )
        );
    })
})

//says what happens when user provides a POST request
app.post("/api/blog", (req, res) => {
    let response;
    //making sure post has title and text
    if (req.body.title && req.body.text) {
        response = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()  //give item ID, this will help with displaying and deleting saved notes.
        };

        res.json("Blog post with title " + response.title + " has been added")

        //check current blog.json
        fs.readFile("./db/blog.json", "utf-8", (err, data) => {
            if (err) throw err;

            //parse current notes JSON, string ---> JSON object
            const originalNotes = JSON.parse(data);
            //add new note to originalNotes JSON object
            originalNotes.push(response);
            //stringify noteString to pass it back to blog.json, JSON ---> string
            const noteString = JSON.stringify(originalNotes);

            //write new noteString to blog.json
            fs.writeFile(`./db/blog.json`, noteString, (err) =>
                err
                    ? console.error(err)
                    : console.log(
                        "Blog post with title " + response.title + " has been added"
                    )
            );
        })
    }
    //in case user enters a get request that does not contain title and text
    else {
        res.json("Request body must contain a title and text");
    }
});


//app launches on port 3001
app.listen(PORT, () =>
    console.log("App listening at http://localhost:" + PORT));