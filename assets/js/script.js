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
  modalCheckboxes();
  if (newUser) {
  } else {
    modalPopulate();
  }
}

var modalCheckboxes = function () {
  for (var c = 0; c < catsOptions.length; c++) {
    cc = c + 1;
    console.log(cc);
    var inputLine = document.createElement("div");
    var checkbox = document.createElement("input");
    var labelCheckbox = document.createElement("label");
    var linebreak = document.createElement("br");
    checkbox.setAttribute("name", "preference" + cc);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", catsOptions[c]);
    checkbox.setAttribute("value", catsOptions[c]);
    //or can add classes for styling it
    // inputLine.setAttribute("style", "display:inline-flex");
    labelCheckbox.setAttribute("for", catsOptions[c]);
    labelCheckbox.textContent = catsOptions[c];

    inputLine.appendChild(checkbox);
    inputLine.appendChild(labelCheckbox);
    formContainer.appendChild(inputLine);
    formContainer.appendChild(linebreak);
  }
};

// welcome

var modalPopulate = function () {
  // say welcome userName
  //populate radio buttons
  // change title
  console.log(pastUsers);
  document.getElementById("nameTitle").innerHTML =
    "Welcome back " + pastUsers[0];
  document.querySelector("#name-bar").innerHTML = "";
  for (var a = 1; a < pastUsers.length; a++) {
    var answerFill = document.querySelector(
      'input[name="preference' + a + '"]'
    );
    console.log(answerFill);
    if (pastUsers[a] === true) {
      answerFill.checked = true;
    }
  }
  //add a I'm not pastUsers[0] bar to clear ls and reload
};

function gatherInput() {
  //grab this
  if (newUser) {
    const setName = inputBarEl.value;
    pastUsers[0] = setName;
  }
  //get checkbox answers //if checked then true, else false

  for (var c = 0; c < catsOptions.length; c++) {
    cc = c + 1;
    console.log(cc);
    var checkedTF = document.querySelector(
      '[name="preference' + cc + '"]'
    ).checked;
    console.log(checkedTF.checked);
    if (checkedTF) {
      startCats.push(catsOptions[c]);
      pastUsers[cc] = true;
      console.log(startCats);
    } else {
      pastUsers[cc] = false;
    }
  }

  localStorage.setItem("pastUsers", JSON.stringify(pastUsers));
  // console.log(setName);
  //get categories
}

function nameInput() {
  const setName = inputBarEl.value;
  localStorage.setItem("USER", JSON.stringify(setName));
  console.log(setName);
}

// PLACE HOLDER IMAGES

const auth = "563492ad6f9170000100000152ffb040725b4fec8924b778c7fa6b04";
const next = document.querySelector(".next");

//search
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
    document.querySelector("#placeholder-img").appendChild(pic);
    console.log("placeholder");
  });
}
curatedPhotos(pagenr);
// END OF PLACEHOLDER IMAGES

//SEARCHED IMAGES
async function SearchImgs(query, pagenr) {
  const data = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
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
    document.querySelector(".gallery").appendChild(pic);
    console.log("placeholder");
  });
}

searchbtn.addEventListener("click", () => {
  if (input.value === "") return;
  clear();
  search = true;
  SearchImgs(query, pagenr);
});

function clear() {
  input.value = "";
  document.querySelector(".gallery").innerHTML = "";
  pagenr = 1;
}
// END OF SEARCHED IMAGES

//  FETCH IMAGES FROM PEXEL "ON CLICK" BUTTON
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
      // photosContainer.innerHTML = "";

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

//  FETCH IMAGES FROM UNSPLASH
var API_KEY1 = "pKvl5nE0zfPqEAvKWOou7fjwjf_5c9JnHdVvoO4abhU";
var url1 = "https://api.unsplash.com/search/photos?page=1&query=";
function pullUnsplashImages() {
  // ACCESS TO URL
  var queryParams = category;
  var finalURL =
    url1 +
    queryParams +
    "&client_id=pKvl5nE0zfPqEAvKWOou7fjwjf_5c9JnHdVvoO4abhU";
  console.log(queryParams);
  console.log(category);
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
  photosContainer.innerHTML = "";
  pullImages();
  pullUnsplashImages();
}

continueBtnEl.addEventListener("click", showMainPage);
submitBntEl.addEventListener("click", nameInput);
