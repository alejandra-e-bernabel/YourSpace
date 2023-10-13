// const edit = document.querySelector(".edit");
// const friendContainer = document.getElementById("friendContainer");
// // const pickMe = document.querySelectorAll(".avatar");
// const dragMe = document.createElement("div");
// const pickMe = document.querySelectorAll(".draggable");

// let clicked = false; 

// edit.addEventListener("click", function () {
//   if (!clicked) {
//     console.log("Button clicked!");
// edit.textContent="Select the Friend to update or add"
  
//   const newImage1 = document.createElement("img");
//   newImage1.className = "avatar hover-effect";
//   newImage1.src = "/images/friend-Alexandra.jpg";
//   newImage1.alt = "A female standing in the middle of a brick floor with a lighthouse in the background";
//   dragMe.className = "draggable";
//   dragMe = "true";


//   const newImage2 = document.createElement("img");
//   newImage2.className = "avatar hover-effect";
//   newImage2.src = "/images/friend-Catherine.jpg";
//   newImage2.alt = "A female with a halloween prop alien hugging her from behind";
//   dragMe.className = "draggable";
//   dragMe = "true";

//   const newImage3 = document.createElement("img");
//   newImage3.className = "avatar hover-effect";
//   newImage3.src = "/images/friend-Suzy.jpg";
//   newImage3.alt = "Two females staring at the camera, standng side by side in a garden while holding a drink";
// dragMe.className = "draggable";
// dragMe = "true";

//   const newImage4 = document.createElement("img");
//   newImage4.className = "avatar hover-effect";
//   newImage4.src = "/images/friend-Felipe.jpg";
//   newImage4.alt = "A weiner dog staring at the camera ";
// dragMe.className = "draggable";
// dragMe = "true";

//   const newImage5 = document.createElement("img");
//   newImage5.className = "avatar hover-effect";
//   newImage5.src = "/images/friend-John.jpg";
//   newImage5.alt = "A image of gray and white seamless pattern";
// dragMe.className = "draggable";
// dragMe = "true";

//     //  Create new paragraph elements
//     const newParagraph1 = document.createElement("p");
//     newParagraph1.textContent = "Alexandra Rodriguez";
//     newParagraph1.className = "name";

//     const newParagraph2 = document.createElement("p");
//     newParagraph2.textContent = "Catherine Smith";
//     newParagraph2.className = "name";

//     const newParagraph3 = document.createElement("p");
//     newParagraph3.textContent = "Suzy Johnston";
//     newParagraph3.className = "name";

//     const newParagraph4 = document.createElement("p");
//     newParagraph4.textContent = "Felipe Santiago";
//     newParagraph4.className = "name";

//     const newParagraph5 = document.createElement("p");
//     newParagraph5.textContent = "John Cena";
//     newParagraph5.className = "name";


//     // Append new images and paragraphs to the friend container
//     friendContainer.appendChild(newImage1);
//     friendContainer.appendChild(newParagraph1);
//     friendContainer.appendChild(newImage2);
//     friendContainer.appendChild(newParagraph2);
//     friendContainer.appendChild(newImage3);
//     friendContainer.appendChild(newParagraph3);
//     friendContainer.appendChild(newImage4);
//     friendContainer.appendChild(newParagraph4);
//     friendContainer.appendChild(newImage5);
//     friendContainer.appendChild(newParagraph5);

//       pickMe.forEach((element) => {
//         element.classList.add("hover-effect");
//       });

//     clicked = true; 
//   }
//   });


  
const editButton = document.querySelector(".edit");
const friendContainer = document.getElementById("friendContainer");
let clicked = false;

editButton.addEventListener("click", function () {
  if (!clicked) {
    console.log("Button clicked!");
    editButton.textContent = "Select a friend to update or add";
    addFriend("friend-Alexandra.jpg", "Alexandra Rodriguez");
    addFriend("friend-Catherine.jpg", "Catherine Smith");
    addFriend("friend-Suzy.jpg", "Suzy Johnston");
    addFriend("friend-Felipe.jpg", "Felipe Santiago");
    addFriend("friend-John.jpg", "John Cena");
    clicked = true;
  }
});

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



