// fetch images from pexel
var API_KEY = "563492ad6f9170000100000152ffb040725b4fec8924b778c7fa6b04";
var url = "https://api.pexels.com/v1/search";
var category = "nature";
console.log(category);
function pullImages() {
  // access to category
  //access to url
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
    });
}
var musicCatBtn = document.querySelector("#music-btn");
musicCatBtn.addEventListener("click", setCat);
var booksCatBtn = document.querySelector("#books-btn");
booksCatBtn.addEventListener("click", setCat);
var travelCatBtn = document.querySelector("#travel-btn");
travelCatBtn.addEventListener("click", setCat);
var sportsCatBtn = document.querySelector('#sports-btn');
sportsCatBtn = addEventListener("click", setCat);
var natureCatBtn = document.querySelector('#nature-btn');
natureCatBtn = addEventListener("click", setCat);

function setCat(evt) {
  category = evt.target.value;
  pullImages();
}
