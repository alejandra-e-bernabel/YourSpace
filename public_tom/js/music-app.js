// music-app.js

// Define the onYouTubeIframeAPIReady function
function onYouTubeIframeAPIReady(videoUrl,playerContainer,flag) {
    // Check if videoUrl is not null or undefined
  if (videoUrl && flag) {
    const player = new YT.Player(playerContainer, {
      height: '315', // Set dimensions as needed
      width: '560',
      videoId: extractVideoId(videoUrl),
      playerVars: {
        controls: 1, // Show player controls
        autoplay: 0, // Autoplay (0 = disabled, 1 = enabled)
        disablekb: 1, // Disable keyboard controls
        enablejsapi: 1, // Enable JavaScript API
        modestbranding: 1, // Minimal YouTube branding
      },
    });
  } else {
    console.error('No valid YouTube video URL provided.');
  }
}

// Function to extract the video ID from a YouTube URL
function extractVideoId(url) {
  const videoIdRegex = /(?:\?v=|\/embed\/|youtu.be\/)([\w-]+)/;
  const match = url.match(videoIdRegex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

// Handle the click event for the "List Songs" list item
const listSongs = document.getElementById('list-songs');
listSongs.addEventListener('click', function () {
  // Make an AJAX GET request to /songs
  fetch('/songs')
    .then(response => response.json())
    .then(data => {
      // Handle the response data (list of songs)
      displaySongs(data); // Call a function to display the songs
    })
    .catch(error => {
      console.error('Error:', error);
    });
})

// Handle the click event to play a song (using event delegation on the parent ul)
const songList = document.getElementById('song-list');
playerContainer = document.getElementById('youtube-player-container');

songList.addEventListener('click', function (event) {
  const target = event.target;

  // Check if the clicked element has a "data-song-path" attribute
  if (target && target.getAttribute('data-song-path')) {
    const songPath = target.getAttribute('data-song-path');
    const flag = true;
    // Call onYouTubeIframeAPIReady with the selected song's video URL
    onYouTubeIframeAPIReady(songPath,playerContainer,flag);    
  }
});

// Function to display the list of songs on the page
function displaySongs(songs) {
  const songList = document.getElementById('song-list');

  // Clear any previous song list content
  songList.innerHTML = '';

  // Create and append a list item for each song
  songs.forEach(song => {
    const listItem = document.createElement('li');
    listItem.textContent = `${song.song_name} - ${song.artist_name}`;

    // Set the data-song-path attribute to the song's path
    listItem.setAttribute('data-song-path', song.song_path);

    // Add the list item to the song list
    songList.appendChild(listItem);
  });
}