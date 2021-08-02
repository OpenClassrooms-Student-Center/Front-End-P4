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
const closeBtn = document.querySelector('.close');
const modalBody = document.querySelector('modal-body');

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locations = document.getElementsByName("location");
const submit = document.querySelector("#submit");
const checkbox1 = document.querySelector('#checkbox1');
const formElements = document.getElementsByClassName('formData');
const form = document.getElementById('reserveForm');

var roundsThrough = 1;
var errorCounter = 0;
var registered = false;
var secondPageRendered = false;
console.log(form);
console.log('Starting round: ' + roundsThrough)
console.log('Resetting form');
form.reset();

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

closeBtn.addEventListener('click', () => {
  closeModal();
});

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Input Validation and Error Messages

//Prevent Default

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
    };
  })(),
  true
);


//Functions to display and remove custom error messages below the input field

function errorMessage(msg, field) {
  //check if there is already a error message
  if (field.parentNode.querySelector("p")) {
  }
  //otherwise add one
  else {
    let redMessage = document.createElement("p");
    redMessage.textContent = msg;
    redMessage.style.color = "red";
    redMessage.style.fontSize = "1rem";
    redMessage.style.padding = "0.2rem";
    redMessage.classList.add("error-message");
    field.parentNode.appendChild(redMessage);
    field.style.borderColor = "red";
    errorCounter++;
  }
}

function removeErrorMessage(field) {
  //check if there is an error message and in case remove it
  if (field.parentNode.querySelector("p")) {
    let toRemove = field.parentNode.querySelector("p");
    field.parentNode.removeChild(toRemove);
    field.style.borderColor = "#ccc";
    console.log("Error Message removed in field: " + field.name);
    errorCounter--;
  }
}

//First and Last Name validation

submit.addEventListener("click", () => {
  if (first.value.length < 2) {
    errorMessage("Please enter 2+ characters for name field.", first);
  } else {
    removeErrorMessage(first);
  }
});

submit.addEventListener("click", () => {
  if (last.value.length < 2) {
    errorMessage("Please enter 2+ characters for name field.", last);
  } else {
    removeErrorMessage(last);
  }
});

//Email Validation

submit.addEventListener("click", () => {
  if (email.validity.typeMismatch || email.validity.valueMissing) {
    errorMessage("Please enter a valid email address", email);
  } else {
    removeErrorMessage(email);
  }
});

//Birthday Validation

submit.addEventListener("click", () => {
  if (birthdate.validity.valueMissing) {
    errorMessage("You must enter your date of birth.", birthdate);
  } else {
    removeErrorMessage(birthdate);
  }
});

//Tournament Quantity Validation

submit.addEventListener("click", () => {
  if (isNaN(quantity.value) || quantity.value < 0) {
    errorMessage("Please enter a number or leave this field empty", quantity);
  } else {
    removeErrorMessage(quantity);
  }
});

//Radiobutton Validation --> Create Collection, check for selected Button

submit.addEventListener("click", () => {
  let currentLocation;
  for (i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      currentLocation = locations[i].value;
    }
  }
  if (typeof currentLocation == 'undefined') {
    errorMessage("You must choose one option.", locations[0]);
  } else {
    removeErrorMessage(locations[0]);
    console.log('Location successfully chosen: ' + currentLocation);
  }
});

//Terms and Conditions Checkbox Validation

submit.addEventListener("click", () => {
  if (checkbox1.checked == false) {
    errorMessage("You must check to agree to terms and conditions.", checkbox1);
  } else {
    removeErrorMessage(checkbox1);
  }
});

submit.addEventListener('click', () => {
  console.log('just outside $registered branch now')
  
  if(registered){
    console.log('inside $registered branch now')
    secondPageRendered = true;
    closeModal();
    console.log('EXITING FORM')
  }
});

//After successful validation 

submit.addEventListener('click', () => {
  if(errorCounter == 0){
    console.log('No errors, form filled out correctly');
    
    
    for(i=0; i < formElements.length; i++){
      formElements[i].style.display = 'none';
      console.log('running through hide loop');
    }
    document.querySelector('#locationQuestion').textContent = 'Thank you for submitting your registration details!';
    document.querySelector('#locationQuestion').style.padding = 'auto';
    document.querySelector('#locationQuestion').style.paddingBottom = '6rem';
    document.querySelector('#locationQuestion').style.paddingTop = '6rem';
    document.querySelector('#locationQuestion').style.fontSize = '3rem';
    document.querySelector('#locationQuestion').style.textAllign = "center";
    submit.value = 'Close';
    
    registered = true;
    
    
  }
  else{
    console.log('Error count is: ' + errorCounter );
  }
})





function moveAhead(){
  if(secondPageRendered){
    
    console.log('move ahead function triggered')
    return true;
  }
}

console.log('Rounds through the whole code' + roundsThrough);
roundsThrough++;