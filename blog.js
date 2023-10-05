//declared variables
let postList;


if (window.location.pathname === "/blog") {
    postList = document.querySelectorAll(".list-container .list-group");
}


// function that grabs notes using GET
function getPreviousBlogPosts() {
    fetch("api/blog", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

//function that creates Li element
function createLi (text) {
    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");

    const spanEl = document.createElement("span");
    spanEl.classList.add('list-item-title');
    spanEl.innerText = text;

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
async function renderPreviousPosts (posts) {
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
        const li = createLi(note.title);
        li.sataset.noe = JSON.stringify(note);

        blogListItems.push(li);
    });

    if (window.location.pathname === "/blog") {
        blogListItems.forEach((note) => postList[0].append(note));
    }
}


//function that deletes note
function deletePost(id) {
    fetch(`/api/blog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

//function to handle delete
function handleDelete (e) {
    e.stopPropagation();

    const blogPost = e.target;
    const blogPostId = JSON.parse(blogPost.parentElement.getAttribute("data-note")).id;

    deletePost(blogPostId).then(() => {
        //I believe I need this .then since deletePost is a fetch call.
        console.log("post deleted");
    })
}

// function that saves new notes

//event listener for the new button