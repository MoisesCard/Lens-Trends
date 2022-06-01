// modal code
var introModalEl = document.querySelector("#introModal");
var mainPageEl = document.querySelector("#main-page");
var continueBtnEl = document.querySelector("#continue-btn");
var inputBarEl = document.querySelector("#input-bar");
var submitBntEl = document.querySelector("#submit-name");

// will show modal
window.onload = function () {
  introModalEl.classList = "display";
  mainPageEl.classList = "noDisplay";
};

// will make modal disapear and show main page
function showMainPage() {
  introModalEl.classList = "noDisplay";
  mainPageEl.classList = "display";
}

function nameInput() {
  const setName = inputBarEl.value;
  localStorage.setItem("USER", JSON.stringify(setName));
  console.log(setName);
}

function pullImages() {
  // ACCESS TO URL
  var queryParams = "?query=" + category;
  var finalURL = url + queryParams;
  console.log(finalURL);
  fetch(finalURL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // data.photos
      photosContainer.innerHTML = "";
      for (let i = 0; i < data.photos.length; i++) {
        const photo = data.photos[i];
        console.log(photo);
        var imageElement = document.createElement("img");
        imageElement.src = photo.src.small;
        imageElement.classList.add("photo");
        console.log(photo.src.original);
        photosContainer.appendChild(imageElement);
      }
    });
}
var musicCatBtn = document.querySelector("#music-btn");
musicCatBtn.addEventListener("click", setCat);
var booksCatBtn = document.querySelector("#books-btn");
booksCatBtn.addEventListener("click", setCat);
var travelCatBtn = document.querySelector("#travel-btn");
travelCatBtn.addEventListener("click", setCat);
var sportsCatBtn = document.querySelector("#sports-btn");
sportsCatBtn = addEventListener("click", setCat);
var natureCatBtn = document.querySelector("#nature-btn");
natureCatBtn = addEventListener("click", setCat);
var photosContainer = document.querySelector("#photos-container");

function setCat(evt) {
  category = evt.target.value;
  pullImages();
}

continueBtnEl.addEventListener("click", showMainPage);
submitBntEl.addEventListener("click", nameInput);
