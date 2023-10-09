//load posts from local storage
let posts =JSON.parse(localStorage.getItem('posts')) || [];

//function to render posts on the bulletin board
function renderPosts()  {
    const bulletinBoard = document.getElementsByClassName('bulletin-board');
    for(let i = 0; i < bulletinBoard.length; i++)   {
        bulletinBoard[i].value = posts[i] || '';
    }
}
//saves post to local storage
function saveEvent() {
    const saveButtons = document.getElementsByClassName('saveBtn');
    for (let i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', function () {
            const key = i.toString(); // Using index as the key
            const value = document.getElementsByClassName('bulletin-board')[i].value;
            posts[i] = value; // Update posts array
            localStorage.setItem('posts', JSON.stringify(posts)); // Save posts array to local storage
        });
    }
}

//function to delete a post
function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}
saveEvent();
renderPosts();
