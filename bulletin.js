//load posts from local storage
let posts =JSON.parse(localStorage.getItem('posts')) || [];

//function to render posts on the bulletin board
function renderPosts()  {
    const bulletinBoard = document.getElementById('bulletin-board');
    bulletinBoard.innerHTML = '';
    posts.forEach((post, index) =>  {
        const postElement = document.createElement('div');
        postElement.className = 'bg-white p-4 rounded shadow';
        postElement.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">${post.title}</h2>
        <p>${post.content}</p>
        <button class="mt-4 bg-red-500 text-white px-4 py-2 rounded" onclick="deletePost(${index})">Delete</button>
        `;
        bulletinBoard.appendChild(postElement);
    });
}
//function to save posts to local storage
function savePost(title, content)   {
    posts.push({ title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}

//function to delete a post
function deletePost(index)  {
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}

renderPosts();
