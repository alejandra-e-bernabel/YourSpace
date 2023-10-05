//declared variables
let postList;
let saveBtn;
let postTitle;
let postText;


if (window.location.pathname === "/blog") {
    postList = document.querySelectorAll(".list-container .list-group");
    saveBtn = document.getElementById("newEntryButton");
    postTitle = document.querySelector('.newPostTitle');
    postText = document.querySelector(".newPostText");
}


// function that grabs notes using GET
function getPreviousBlogPosts() {
    return fetch("api/blog", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

function savePost(post) {
    return fetch('/api/blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
}

function getPosts() {
    return fetch('/api/blog', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function handleSave() {
    const newPost = {
        title: postTitle.value,
        text: postText.value
    };

    savePost(newPost).then(() => {
        getAndRenderPosts();
    })
}

function getAndRenderPosts() {
    getPosts().then(renderPreviousPosts);
}

//function that creates Li element
function createLi(blogTitle, blogText) {
    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");

    const spanEl = document.createElement("span");
    spanEl.classList.add('list-item-title');
    spanEl.innerHTML = `<h4>${blogTitle}</h4><br><p>${blogText}</p>`;

    liEl.append(spanEl);

    //add delete button
    const delBtnEl = document.createElement('i');
    delBtnEl.classList.add(
        'fas',
        'fa-trash-alt',
        'float-right',
        'text-danger',
        'delete-note'
    );

    delBtnEl.addEventListener('click', handleDelete);

    liEl.append(delBtnEl);

    return liEl;
}

//function that renders notes asynchronously
async function renderPreviousPosts(posts) {
    let jsonNotes = await posts.json();

    //reset list content
    if (window.location.pathname === "/blog") {
        postList.forEach((el) => (el.innerHTML = ""));
    }

    let blogListItems = [];

    if (jsonNotes.length === 0) {
        blogListItems.push(createLi("No previous posts... why not add some thoughts to your space?"));
    }

    jsonNotes.forEach((note) => {
        const li = createLi(note.title, note.text);
        li.dataset.note = JSON.stringify(note);

        blogListItems.push(li);
    });

    if (window.location.pathname === "/blog") {
        blogListItems.forEach((note) => postList[0].append(note));
    }
}


//function that deletes note
function deletePost(id) {
    return fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//function to handle delete
function handleDelete(e) {
    e.stopPropagation();

    const blogPost = e.target;
    const blogPostId = JSON.parse(blogPost.parentElement.getAttribute("data-note")).id;

    deletePost(blogPostId).then(() => {
        //I believe I need this .then since deletePost is a fetch call.
        console.log("post deleted");
    })
}



// function that saves new notes

//event listener for the new post button
if (window.location.pathname === '/blog') {
    console.log("window entered");
    saveBtn.addEventListener('click', function() {
        console.log("button pressed");
        handleSave();
    });
}

//render notes upon loading
getAndRenderPosts();