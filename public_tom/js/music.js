// music.js
// Client-side search logic
function searchYouTube() {
    const searchQuery = document.getElementById('searchQuery').value;

    // Make a GET request to the server's /search route with the search query
    fetch(`/search?query=${encodeURIComponent(searchQuery)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displaySearchResults(data);
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
}

function displaySearchResults(searchResults) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    searchResults.items.forEach(result => {
        const videoId = result.id.videoId;
        const title = result.snippet.title;
        const thumbnail = result.snippet.thumbnails.default.url;

        const searchResultContainer = document.createElement('div');
        searchResultContainer.className = 'search-result';

        searchResultContainer.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
                <img src="${thumbnail}" alt="${title}">
            </a>
            <h2>${title}</h2>
            <button onclick="addSongToList('${title}', '${videoId}')" class="add-to-list-button">Add to List</button>
        `;

        searchResultsContainer.appendChild(searchResultContainer);
    });
}


function addSongToList(title, videoId) {
    // Update the music list section in the view
    const musicListContainer = document.getElementById('musicListContainer');
    const songElement = document.createElement('div');
    songElement.innerHTML = `
      <div class="music-list-item">
        <h3>${title}</h3>
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch on YouTube</a>
      </div>
    `;

    musicListContainer.appendChild(songElement);
}

// Other client-side code for searching and displaying results