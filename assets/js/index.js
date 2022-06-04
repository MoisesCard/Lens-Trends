/// //  FETCH IMAGES FROM PEXEL
var API_KEY = "563492ad6f9170000100000152ffb040725b4fec8924b778c7fa6b04";
var url = "https://api.pexels.com/v1/search";
// var category = "";

function showMainPage() {
  gatherInput();
  introModalEl.classList = "noDisplay";
  mainPageEl.classList = "display";
  createCatBtns();
  startPullImages();
}

var startPullImages = function () {
  photosContainer.innerHTML = "";
  if (startCats.length > 0) {
    for (var i = 0; i < startCats.length; i++) {
      pullImages(startCats[i]);
    }
  } else {
    //change to whatever the generic category is from the options
    pullImages(general);
  }
};

function pullImages(category) {
  // startCats holds array of image categories from modal

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
      // photosContainer.innerHTML = "";
      for (let i = 0; i < data.photos.length; i++) {
        const photo = data.photos[i];
        console.log(photo);
        var imageElement = document.createElement("img");
        imageElement.src = photo.src.large;
        imageElement.setAttribute("id", photo.id);
        imageElement.setAttribute("name", photo.photographer);
        imageElement.setAttribute("value", photo.alt);
        imageElement.classList.add("photo");
        console.log(photo.src.original);
        photosContainer.appendChild(imageElement);
      }
    });
}
var cbCont = document.getElementById("category-btns-container");
var createCatBtns = function () {
  for (var i = 0; i < catsOptions.length; i++) {
    var catBtn = document.createElement("button");
    catBtn.classList = "button btn1 change-category-btn ";
    catBtn.setAttribute("id", catsOptions[i] + "-btn");
    catBtn.setAttribute("value", catsOptions[i]);
    catBtn.innerHTML = catsOptions[i];
    cbCont.appendChild(catBtn);
  }
};

photosContainer.addEventListener("click", function (event) {
  q = [event.target.id];
  console.log(q);
  var photoPick = document.getElementById(q);
  console.log(photoPick);
  console.log(photoPick.getAttribute("src"));
  var infoURLtext = photoPick.getAttribute("src");
  var infocreatorText = photoPick.getAttribute("name");
  var infoAltText = photoPick.getAttribute("value");
  var infoContainer = document.getElementById("selected-photo-info");
  infoContainer.innerHTML = "";
  var infoURL = document.createElement("div");
  var infoAlt = document.createElement("div");
  var infoCreator = document.createElement("div");
  //add classes for styling
  infoURL.classList = "image-info";
  infoAlt.classList = "image-info";
  infoCreator.classList = "image-info";
  infoCreator.setAttribute("id", "infoURL");
  infoURL.setAttribute("id", "infoURL");
  infoAlt.setAttribute("id", "infoAlt");
  infoURL.setAttribute("style", "color:white");
  infoAlt.setAttribute("style", "color:white");
  infoCreator.setAttribute("style", "color:white");
  infoURL.innerHTML = "Source URL: " + infoURLtext;
  infoAlt.innerHTML = "Alt Text: " + infoAltText;
  infoCreator.innerHTML = "Photographer: " + infocreatorText;
  infoContainer.append(infoURL);
  infoContainer.append(infoAlt);
  infoContainer.append(infoCreator);
});

cbCont.addEventListener("click", function (evt) {
  category = evt.target.value;
  pullImages(category);
});

// add a clear results button
var clearPhotos = function () {
  photosContainer.innerHTML = "";
};
document
  .getElementById("clearOutPhotos-btn")
  .addEventListener("click", clearPhotos);

continueBtnEl.addEventListener("click", showMainPage);
// submitBntEl.addEventListener("submit", nameInput);

// add a clear modal/ls button
var clearStorage = function () {
  photosContainer.innerHTML = "";
  localStorage.clear();
  location.reload();
};
document.getElementById("not-me").addEventListener("click", clearStorage);

var searchbtnfunc = function () {
  var searchInput = document.querySelector(".search-input");
  category = searchInput.value;
  pullImages(category);
};
searchbtn.addEventListener("click", searchbtnfunc);
