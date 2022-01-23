function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close window
function closeWindow() {
  if (modalbg.style.display === "block") {
    return (modalbg.style.display = "none");
  }
}

const firstName = document.getElementById("first"),
  lastName = document.getElementById("last"),
  email = document.getElementById("email"),
  birthdate = document.getElementById("birthdate"),
  quantity = document.getElementById("quantity"),
  country = document.getElementsByClassName("location"),
  agreeToTerms = document.getElementById("checkbox1"),
  form = document.getElementById("form"),
  submit = document.getElementById("submit"),
  errorMsg = document.getElementsByClassName("error");


// Form Variables
const firstName = document.getElementById("first"),
  lastName = document.getElementById("last"),
  email = document.getElementById("email"),
  birthdate = document.getElementById("birthdate"),
  quantity = document.getElementById("quantity"),
  country = document.getElementsByClassName("location"),
  agreeToTerms = document.getElementById("checkbox1"),
  form = document.getElementById("form"),
  submit = document.getElementById("submit"),
  errorMsg = document.getElementsByClassName("error");