const edit = document.querySelector(".edit");
const friendContainer = document.getElementById("friendContainer");

edit.addEventListener("click", function () {
    console.log("I was clicked");

  const newImage1 = document.createElement("img");
  newImage1.className = "avatar2";
  newImage1.src = "/images/friend-Alexandra.jpg";
  newImage1.alt = "A female standing in the middle of a brick floor with a lighthouse in the background";

  const newImage2 = document.createElement("img");
  newImage2.className = "avatar2";
  newImage2.src = "/images/friend-Catherine.jpg";
  newImage2.alt = "A female with a halloween prop alien hugging her from behind";

  const newImage3 = document.createElement("img");
  newImage3.className = "avatar2";
  newImage3.src = "/images/friend-Suzy.jpg";
  newImage3.alt = "Two females staring at the camera, standng side by side in a garden while holding a drink";

  const newImage4 = document.createElement("img");
  newImage4.className = "avatar2";
  newImage4.src = "/images/friend-Felipe.jpg";
  newImage4.alt = "A weiner dog staring at the camera ";

  const newImage5 = document.createElement("img");
  newImage5.className = "avatar2";
  newImage5.src = "/images/friend-John.jpg";
  newImage5.alt = "A image of gray and white seamless pattern";

  // Append new images to the friend container
  friendContainer.appendChild(newImage1);
  friendContainer.appendChild(newImage2);
  friendContainer.appendChild(newImage3);
  friendContainer.appendChild(newImage4);
  friendContainer.appendChild(newImage5);

});
