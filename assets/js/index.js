// PLACE HOLDER js

const auth = "563492ad6f9170000100000152ffb040725b4fec8924b778c7fa6b04";
// search button
const searchbtn = document.querySelector(".searchbtn");
const input = document.querySelector("input");

let pagenr = 1;
let search = false;
let query = "";

inputBarEl.addEventListener("input", (e) => {
  e.preventDefault();
  query = e.target.value;
});

async function curatedPhotos(pagenr) {
  const data = await fetch(
    `https://api.pexels.com/v1/curated?per_page=24&page=${pagenr}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );

  const result = await data.json();
  result.photos.forEach((photo) => {
    const pic = document.createElement("div");
    pic.innerHTML = `<img src=${photo.src.large} 
        <p>Photo : ${photo.photographer}</p>
        <a href=${photo.src.large}> Download</a>
        
        > </img> `;
    document.querySelector("#photos-container").appendChild(pic);
  });
}

//

//  FETCH IMAGES FROM PEXEL
var API_KEY = "563492ad6f9170000100000152ffb040725b4fec8924b778c7fa6b04";
var url = "https://api.pexels.com/v1/search";
var category = "";

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
      // DATA.PHOTOS
      photosContainer.innerHTML = "";
      for (let i = 0; i < data.photos.length; i++) {
        const photo = data.photos[i];
        console.log(photo);
        var imageElement = document.createElement("img");
        imageElement.src = photo.src.large;
        imageElement.classList.add("photo");
        console.log(photo.src.large);
        photosContainer.appendChild(imageElement);
      }
    });
}

// CATEGORY BUTTONS
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

var foodCatBtn = document.querySelector("#food-btn");
foodCatBtn.addEventListener("click", setCat);
var animalsCatBtn = document.querySelector("#animals-btn");
animalsCatBtn.addEventListener("click", setCat);
var plantsCatBtn = document.querySelector("#plants-btn");
plantsCatBtn.addEventListener("click", setCat);
var beachCatBtn = document.querySelector("#beach-btn");
beachCatBtn.addEventListener("click", setCat);
var danceCatBtn = document.querySelector("#dance-btn");
danceCatBtn.addEventListener("click", setCat);

var photosContainer = document.querySelector("#photos-container");

function setCat(evt) {
  category = evt.target.value;
  pullImages();
}

curatedPhotos(pagenr);
