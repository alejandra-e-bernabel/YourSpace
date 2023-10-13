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


     // Create new paragraph elements
    const newParagraph1 = document.createElement("p");
    newParagraph1.textContent = "Alexandra Rodriguez";
    newParagraph1.className = "pName";

    const newParagraph2 = document.createElement("p");
    newParagraph2.textContent = "Catherine Smith";
    newParagraph2.className = "pName";

    const newParagraph3 = document.createElement("p");
    newParagraph3.textContent = "Suzy Johnston";
    newParagraph3.className = "pName";

    const newParagraph4 = document.createElement("p");
    newParagraph4.textContent = "Felipe Santiago";
    newParagraph4.className = "pName";

    const newParagraph5 = document.createElement("p");
    newParagraph5.textContent = "John Cena";
    newParagraph5.className = "pName";
    // Append new images and paragraphs to the friend container
    friendContainer.appendChild(newImage1);
    friendContainer.appendChild(newParagraph1);
    friendContainer.appendChild(newImage2);
    friendContainer.appendChild(newParagraph2);
    friendContainer.appendChild(newImage3);
    friendContainer.appendChild(newParagraph3);
    friendContainer.appendChild(newImage4);
    friendContainer.appendChild(newParagraph4);
    friendContainer.appendChild(newImage5);
    friendContainer.appendChild(newParagraph5);
});




