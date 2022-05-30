var introModalEl = document.querySelector('#introModal')
var mainPageEl = document.querySelector('#main-page')

var continueBtnEl = document.querySelector('#continue-btn')
var inputBarEl = document.getElementById("#input-bar")


window.onload = function () {
    introModalEl.classList = "display"
    mainPageEl.classList = "noDisplay"
    
   

}

function showMainPage () {
    introModalEl.classList = "noDisplay"
    mainPageEl.classList = "display"
   
}

continueBtnEl.addEventListener("click", showMainPage);