let bioButton = document.getElementById("bioEditButton");
let nameButton = document.getElementById("nameEditButton");
let popupContainer = document.getElementById("popupContainer");
let nameInput = document.getElementById("nameInput");
let bioInput = document.getElementById("bioInput");
let nameSaveButton = document.getElementById("nameSaveButton");
let bioSaveButton = document.getElementById("bioSaveButton");
let editPopupContainer = document.getElementById("editPopupContainer");
let homeEditButton = document.getElementById("homeEditButton");
let closeEditWindow = document.getElementById("closeEditWindow");
let calcelEdit = document.getElementById("cancelEdit");

homeEditButton.addEventListener("click", function () {
    editPopupContainer.classList.remove("hidden");
    popupContainer.classList.remove("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    calcelEdit.classList.add("hidden");

    console.log("edit button has been clicked.");
})

bioButton.addEventListener("click", function () {
    popupContainer.classList.remove("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.remove("hidden");
    bioSaveButton.classList.remove("hidden");
    bioButton.classList.add("hidden");
    nameButton.classList.add("hidden");
    calcelEdit.classList.remove("hidden");
    closeEditWindow.classList.add("hidden");

    console.log("edit bio button has been clicked.");
});

nameButton.addEventListener("click", function () {
    popupContainer.classList.remove("hidden");
    nameInput.classList.remove("hidden");
    nameSaveButton.classList.remove("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    bioButton.classList.add("hidden");
    nameButton.classList.add("hidden");
    calcelEdit.classList.remove("hidden");
    closeEditWindow.classList.add("hidden");

    console.log("Edit name button has been clicked.");
});

nameSaveButton.addEventListener("click", function () {
    popupContainer.classList.add("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    bioButton.classList.remove("hidden");
    nameButton.classList.remove("hidden");
    closeEditWindow.classList.remove("hidden");


    let newName = nameInput.value;

    console.log("new name is  " + newName);

    if (newName != "") {
        updateNameInfo(newName);
    }

    console.log("Name successfully saved.");
});

bioSaveButton.addEventListener("click", function () {
    popupContainer.classList.add("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    bioButton.classList.remove("hidden");
    nameButton.classList.remove("hidden");
    closeEditWindow.classList.remove("hidden");


    let newBio = bioInput.value;

    console.log("new bio is  " + newBio);

    if (newBio != "") {
        updateBioInfo(newBio);
    }

    console.log("Name successfully saved.");

    console.log("Bio successfully saved.");
});

closeEditWindow.addEventListener("click", function () {
    editPopupContainer.classList.add("hidden");
    popupContainer.classList.add("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    console.log("edit window is now closed.");
});

cancelEdit.addEventListener("click", function () {
    popupContainer.classList.add("hidden");
    nameInput.classList.add("hidden");
    nameSaveButton.classList.add("hidden");
    bioInput.classList.add("hidden");
    bioSaveButton.classList.add("hidden");
    bioButton.classList.remove("hidden");
    nameButton.classList.remove("hidden");
    closeEditWindow.classList.remove("hidden");

    console.log("cancel changes clicked.");
});


function updateBioInfo(newBio) {
    localStorage.setItem('bio', newBio);
    populateBioInfo();
}

function populateBioInfo() {
    let bio = localStorage.getItem('bio');

    if (!bio) {
        bio = "Edit to create a brief bio!"
    }
    let bioEntry = "Brief bio: " + bio;

    let shortBio = document.getElementById('shortBio');
    shortBio.innerHTML = bioEntry;
}

function updateNameInfo(newName) {
    localStorage.setItem('name', newName);
    populateNameInfo();
}

function populateNameInfo() {
    let name = localStorage.getItem('name');

    if (!name) {
        name = "Your Name"
    }

    let bioUsername = document.getElementById('bioUsername');
    bioUsername.innerHTML = name;
}


//initial name and bio population
populateBioInfo();
populateNameInfo();