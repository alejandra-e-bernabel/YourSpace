// updated 0747 10/17 tpf
// JavaScript function to fetch and log friends when the "Edit/Add Friends" button is clicked
// JavaScript function to fetch friends from the server and log the response
document.addEventListener("DOMContentLoaded", function () {
  // This code will be executed after the DOM is fully loaded

  // You can call the fetchFriends function here or add an event listener to trigger it.
  fetchFriends();
});

function fetchFriends() { }
fetch('/friend/friend')
  .then(response => response.json())
  .then(data => {
    console.log('Friend data:', data); // Log the friend data to the console
    const friendsData = data;
    showFriendsPage(friendsData);

  })
  .catch(error => {
    console.error('Error fetching friends:', error);
  });

// JavaScript function to navigate to the friend.html page
function showFriendsPage(friendsData) {
  // Redirect to the friend.html page
  window.location.href = '/views/friend.html'; // Adjust the path as needed
  displayFriendsonPage(friendsData);
}
// JavaScript code to dynamically populate the friend list


function displayFriendsonPage(friendsData) {
  // Populate the friend list
  friendsData.forEach(friend => {
    const friendList = document.getElementById('friendsContainer');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'friend';
    checkbox.value = friend.id;
    friendList.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = friend.name;
    friendList.appendChild(label);

    friendList.appendChild(document.createElement('br'));
  });
};
// Event listener for the "Submit" button
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('click', () => {
//   // Handle friend selection logic here
//   const selectedFriendIds = Array.from(document.querySelectorAll('input[name=friend]:checked'))
//     .map(checkbox => checkbox.value);

//   // You can use the selectedFriendIds to display selected friends
//   console.log('Selected Friends:', selectedFriendIds);
//   // Send this data back to the server for further processing if needed
// });

// // Add an event listener to the "Edit/Add Friends" button
// const editButton = document.querySelector(".edit");
// editButton.addEventListener('click', showFriendsPage);

// JavaScript function to fetch friends when a friend is clicked
function getFriends(friendId) {
  console.log('1. friend.js entry point')
  // Make an AJAX request to fetch friends for the clicked friend
  fetch(`/friend/${friendId}`)
  console.log('2. friend.js fetch entry point')
    .then(response => response.json())
    .then(data => {
      // Handle the response data (list of friends) and update your UI
      console.log(data); // Log or update the UI with the fetched friends
    })
    .catch(error => {
      console.error('Error fetching friends:', error);
    });
}

function addFriend(imageSrc, friendName) {
  const newImage = document.createElement("img");
  newImage.className = "avatar hover-effect draggable";
  newImage.src = "/images/" + imageSrc;
  newImage.alt = friendName;

  const newParagraph = document.createElement("p");
  newParagraph.textContent = friendName;
  newParagraph.className = "name";

  friendContainer.appendChild(newImage);
  friendContainer.appendChild(newParagraph);
}

let draggingElement = null;

// Listen for the dragstart event
document.addEventListener("dragstart", function (e) {
  draggingElement = e.target;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", "");
  e.target.classList.add("dragging");
});

// Listen for the dragover event
document.addEventListener("dragover", function (e) {
  e.preventDefault();
});

// Listen for the drop event
document.addEventListener("drop", function (e) {
  if (draggingElement) {
    e.preventDefault();
    if (e.target.classList.contains("draggable")) {
      // Swap the positions of the dragging element and the target element
      const targetElement = e.target;
      const parent = targetElement.parentElement;
      const nextSibling = targetElement.nextSibling;
      parent.insertBefore(draggingElement, targetElement);
      parent.insertBefore(targetElement, draggingElement);
    }
    draggingElement.classList.remove("dragging");
    draggingElement = null;
  }
});