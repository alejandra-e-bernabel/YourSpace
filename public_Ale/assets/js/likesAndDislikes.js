//returns a random number of likes. To be used on posts.
function randomLikes() {
    return Math.floor(Math.random() * 200) + 1;
}

//returns a random number of dislikes. To be used on posts.
function randomDislikes() {
    return Math.floor(Math.random() * 50) + 1;
}

module.exports = {
    randomDislikes,
    randomLikes
}