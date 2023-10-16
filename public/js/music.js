// Initialize your playlist data when the page loads
let playlist = [];

// Function to load playlist data
function getPlaylist() {
    return fetch('/get-playlist')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            playlist = data;
        })
        .catch((error) => {
            console.error('Error fetching playlist:', error);
        });
}

// Function to play a song
function playSong(audioPath) {
    const audioPlayer = new Audio(audioPath);
    audioPlayer.play();
}

// Function to display the playlist when the user clicks the "Retrieve Playlist" button
function displayPlaylist() {
    console.log('Received playlist data:', playlist); // Add this line
    const musicListContainer = document.getElementById('musicListContainer');
    musicListContainer.innerHTML = '';

    // Iterate through the playlist data and display it on the page
    playlist.forEach((item) => {
        const songElement = document.createElement('div');
        const audioPlayer = document.createElement('audio');

        // Create and configure the source element for the audio player
        const source = document.createElement('source');
        source.src = item.audio_path; // Use the audio_path directly
        source.type = 'audio/mpeg';

        audioPlayer.controls = true;

        // Create elements to display song title and artist
        const songTitle = document.createElement('p');
        songTitle.innerText = `Title: ${item.song_title}`;
        const artist = document.createElement('p');
        artist.innerText = `Artist: ${item.artist}`;

        // Add the source element to the audio player
        audioPlayer.appendChild(source);

        // Add a click event listener to play the song when clicked
        songElement.addEventListener('click', () => playSong(item.audio_path));

        // Append all elements to the songElement
        songElement.appendChild(songTitle);
        songElement.appendChild(artist);
        songElement.appendChild(audioPlayer);

        musicListContainer.appendChild(songElement);
    });
}


// Event listener for the "Retrieve Playlist" button
const retrievePlaylistButton = document.getElementById('getPlaylistButton');
retrievePlaylistButton.addEventListener('click', () => {
    getPlaylist().then(() => {
        displayPlaylist();
    });
});