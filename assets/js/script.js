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
      //photosContainer.innerHTML = "";
      for (let i = 0; i < data.photos.length; i++) {
        const photo = data.photos[i];
        console.log(photo);
        var imageElement = document.createElement("img");
        imageElement.src = photo.src.large;
        imageElement.classList.add("photo");
        console.log(photo.src.original);
        photosContainer.appendChild(imageElement);
      }
    });
}

//  FETCH IMAGES FROM UNSPLASH
var API_KEY1 = "pKvl5nE0zfPqEAvKWOou7fjwjf_5c9JnHdVvoO4abhU";
var url1 = "https://api.unsplash.com/search/photos?page=1&query=";

function pullUnsplashImages() {
  // ACCESS TO URL
  var queryParams = category;
  var finalURL = url1 + queryParams + "&client_id=pKvl5nE0zfPqEAvKWOou7fjwjf_5c9JnHdVvoO4abhU";
  console.log(queryParams);
  console.log(category)
  console.log(finalURL);
  fetch(finalURL, {
    headers: {
      Authorization: API_KEY1,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // DATA.PHOTOS
      //photosContainer.innerHTML = "";
      for (let i = 0; i < data.results.length; i++) {
        const photo = data.results[i].urls.regular;
        console.log(photo);
        var imageElement = document.createElement("img");
        imageElement.src = photo;
        imageElement.classList.add("photo");
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
  photosContainer.innerHTML = "";
  pullImages();
  pullUnsplashImages();
}

continueBtnEl.addEventListener("click", showMainPage);
submitBntEl.addEventListener("click", nameInput);