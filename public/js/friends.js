
const editButton = document.querySelector(".edit");
const friendContainer = document.getElementById("friendContainer");
let clicked = false;

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
// editButton.addEventListener("click", function () {
//   if (!clicked) {
//     console.log("Button clicked!");
//     editButton.textContent = "Select a friend to update or add";
//     addFriend("friend-Alexandra.jpg", "Alexandra Rodriguez");
//     addFriend("friend-Catherine.jpg", "Catherine Smith");
//     addFriend("friend-Suzy.jpg", "Suzy Johnston");
//     addFriend("friend-Felipe.jpg", "Felipe Santiago");
//     addFriend("friend-John.jpg", "John Cena");
//     clicked = true;
//   }
// });

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



