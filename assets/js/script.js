// modal code
var introModalEl = document.querySelector("#introModal");
var mainPageEl = document.querySelector("#main-page");
var continueBtnEl = document.querySelector("#continue-btn");
var inputBarEl = document.querySelector("#input-bar");
var submitBntEl = document.querySelector("#submit-name");

//variables
var photosContainer = document.getElementById("photos-container");
var formContainer = document.getElementById("form-container");

//list all category options for checkbox/buttons
var catsOptions = ["music", "animals", "sports", "movies"];

// // search button
const searchbtn = document.querySelector(".searchbtn");

// get answers Array from local storage
var pastUsers = [];
var newUser;
var LSpastUsers = JSON.parse(localStorage.getItem("pastUsers"));
if (LSpastUsers) {
  pastUsers = LSpastUsers;
  newUser = false;
} else {
  pastUsers = [];
  newUser = true;
}
var userName;
var startCats = [];

// will show modal
window.onload = function () {
  introModalEl.classList = "display";
  mainPageEl.classList = "noDisplay";
  modalCheckboxes();
  if (newUser) {
  } else {
    modalPopulate();
  }
};

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
