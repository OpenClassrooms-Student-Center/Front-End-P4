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

  let verification = {
    FirstName: false,
    LastName: false,
    Email: false,
    BirthDate: false,
    Quantity: false,
    Location: false,
    Terms: false,
  };

// ---------------- Form Validation ----------------

// ---- First Name Validation
const checkFirstName = (id, serial, message) => {
  errorMsg[serial].innerHTML =
    id.value === "" || id.value.length < 2 ? message : "";
  verification.FirstName =
    id.value === "" || id.value.length < 2 ? false : true;
};

// ---- Last Name Validation
const checkLastName = (id, serial, message) => {
  errorMsg[serial].innerHTML =
    id.value === "" || id.value.length < 2 ? message : "";
  verification.LastName = id.value === "" || id.value.length < 2 ? false : true;
};

// ---- Email Validation
const checkEmail = (id, serial, message) => {
  errorMsg[serial].innerHTML =
    id.value.includes("@") && id.value.includes(".") ? "" : message;
  verification.Email =
    id.value.includes("@") && id.value.includes(".") ? true : false;
};

// ---- Birthdate Validation
const checkBirth = (id, serial, message) => {
  errorMsg[serial].innerHTML = id.value === "" ? message : "";
  verification.BirthDate = id.value === "" ? false : true;
};

// ---- Quantity Validation
const checkQuantity = (id, serial, message) => {
  errorMsg[serial].innerHTML = id.value === "" ? message : "";
  verification.Quantity = id.value === "" ? false : true;
};

// ---- Location Validation
const checkLocation = (serial, message) => {
  for (let i = 0; i < 6; i++) {
    if (country[i].checked) {
      console.log(country[i].value);
      errorMsg[serial].innerHTML = "";
      verification.Location = true;

      for (let x = 0; x < 6; x++) {
        document.getElementsByClassName("checkbox-icon")[x].style.borderColor =
          "green";
      }

      return;
    }
    verification.Location = false;
    errorMsg[serial].innerHTML = message;
    document.getElementsByClassName("checkbox-icon")[i].style.borderColor =
      "red";
  }
};

// ---- Terms Agreement Validation
const termsAgreement = (serial, message) => {
  errorMsg[serial].innerHTML = agreeToTerms.checked ? "" : message;
  verification.Terms = agreeToTerms.checked ? true : false;
};

const validate = (e) => {
  e.preventDefault();

  checkFirstName(firstName, 0, "Please enter 2+ characters for name field.");
  checkLastName(lastName, 1, "Please enter 2+ characters for name field.");
  checkEmail(email, 2, "Please add a correct email address.");
  checkBirth(birthdate, 3, "You must enter your date of birth.");
  checkQuantity(quantity, 4, "Please add a quantity");
  checkLocation(5, "You must choose one option.");
  termsAgreement(6, "You must check to agree to terms and conditions.");


  if (
    verification.FirstName === true &&
    verification.LastName === true &&
    verification.Email === true &&
    verification.BirthDate === true &&
    verification.Quantity === true &&
    verification.Location === true &&
    verification.Terms === true
  ) {
    console.log("Success")
  }
  return;
};