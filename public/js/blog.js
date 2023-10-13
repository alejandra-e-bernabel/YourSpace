//declared variables
let postList;
let saveBtn;
let postTitle;
let postText;

let currentLi;
let savedID;


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
function createLi(blogTitle, blogText, datePosted, likes, dislikes) {

    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");

    const spanEl = document.createElement("span");
    spanEl.classList.add('list-item-title');

    if (!blogText) {
        spanEl.innerHTML = `<h6>${blogTitle}</h6>`;
        liEl.append(spanEl);
    } else {
        spanEl.innerHTML = `<h4>${blogTitle}</h4><br><p>${blogText}</p><div class=likesDislikesDate><div class=likesAndDislikes><div class= likes><i class="fa-regular fa-thumbs-up" style="color: #ffffff;"></i> ${likes}</div><div class = dislikes><i class="fa-regular fa-thumbs-up fa-rotate-180" style="color: #ffffff;"></i> ${dislikes}</div></div><p class="datePosted pushRight">Posted on ${datePosted}</p></div>`;

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

        delBtnEl.addEventListener("click", function (e) {
            e.stopPropagation();

            const note = e.target;
            const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

            openPopup(noteId);
        });

        liEl.append(delBtnEl);
    }

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
        const li = createLi(note.title, note.text, note.datePosted, note.likes, note.dislikes);
        li.dataset.note = JSON.stringify(note);

        blogListItems.push(li);
    });

    if (window.location.pathname === "/blog") {
        blogListItems.reverse().forEach((note) => postList[0].append(note));
    }
}


//function that deletes note
function deletePost(id) {
    savedID = "";
    closePopup();
    return fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//function to handle delete
function handleDelete() {
    deletePost(savedID).then(() => {
        getAndRenderPosts();
    })
}

// function that saves new notes


//functions to open and close delete popup
function openPopup(ID) {
    savedID = ID;
    document.getElementById('popupContainer').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}

//event listener for the new post button
if (window.location.pathname === '/blog') {
    console.log("window entered");
    saveBtn.addEventListener('click', function () {
        console.log("button pressed");
        handleSave();
    });

}

//render notes upon loading
getAndRenderPosts();