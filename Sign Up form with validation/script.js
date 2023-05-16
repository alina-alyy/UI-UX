firstname = document.getElementById("fname");
lastname = document.getElementById("lname");
Email = document.getElementById("email");
password = document.getElementById("pass");
date = document.getElementById("birthdate");
var isallcorrect = true;
function signup() {
  isallcorrect = true;
  message.innerHTML = "";
  checkTerms();
  if (firstname.value.trim() == "") {
    firstname.classList.add("error-style");
    fname_error.innerHTML = "<p>*Firstname field is empty</p>";
    isallcorrect = false;
  } else {
    firstname_pattern_checker();
  }
  if (lastname.value.trim() == "") {
    lastname.classList.add("error-style");
    lname_error.innerHTML = "<p>*Lastname field is empty</p>";
    isallcorrect = false;
  } else {
    lastname_pattern_checker();
  }
  if (Email.value.trim() == "") {
    Email.classList.add("error-style");
    email_error.innerHTML = "<p>*Email field is empty</p>";
    isallcorrect = false;
  } else {
    email_pattern_checker();
  }
  if (password.value.trim() == "") {
    password.classList.add("error-style");
    pass_error.innerHTML = "<p>*Password field is empty</p>";
    isallcorrect = false;
  } else {
    password_pattern_checker();
  }
  if (date.value.trim() == "") {
    date.classList.add("error-style");
    birthdate_error.innerHTML = "<p>*Date of Birth field is empty</p>";
    isallcorrect = false;
  } else {
    dateofbirth_pattern_checker();
  }
  if (isallcorrect === true) {
    message.innerHTML =
      "<h4 style='padding:5px'>Account Created <span>Successfully</span></h4>";
  }
}
function password_pattern_checker() {
  pass_error.innerHTML = "";
  let isValid = true;

  if (!password.value.match(/\d/)) {
    password.classList.add("error-style");
    pass_error.innerHTML = "<p>Password should have atleast one digit</p>";
    isallcorrect = false;
    isValid = false;
  }
  if (!password.value.match(/[A-Z]/)) {
    password.classList.add("error-style");
    pass_error.innerHTML =
      "<p>Password should have atleast one uppercase Character</p>";
    isallcorrect = false;
    isValid = false;
  }
  if (!password.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    password.classList.add("error-style");
    pass_error.innerHTML =
      "<p>Password should have atleast one special character</p>";
    isallcorrect = false;
    isValid = false;
  }
  if (password.value.length <= 8) {
    password.classList.add("error-style");
    pass_error.innerHTML = "<p>Password length should be greater then 8</p>";
    isallcorrect = false;
    isValid = false;
  }
  if (isValid) {
    password.classList.remove("error-style");
  }
}
function email_pattern_checker() {
  email_error.innerHTML = "";
  isValid = true;
  if (!Email.value.match(/^[A-Za-z0-9]/)) {
    Email.classList.add("error-style");
    email_error.innerHTML =
      "<p>Email must start with an alphanumeric character</p>";
    isallcorrect = false;
    isValid = false;
  } else if (!Email.value.includes("@")) {
    Email.classList.add("error-style");
    email_error.innerHTML = "<p>Email must contain the @ symbol</p>";
    isallcorrect = false;
    isValid = false;
  } else if (!Email.value.match(/@\w+\./)) {
    Email.classList.add("error-style");
    email_error.innerHTML =
      "<p>Email must include alphanumeric a dot (.) after the @ symbol</p>";
    isallcorrect = false;
    isValid = false;
  } else if (!Email.value.match(/[A-Za-z0-9]$/)) {
    Email.classList.add("error-style");
    email_error.innerHTML =
      "<p>Email must end with an alphanumeric character</p>";
    isallcorrect = false;
    isValid = false;
  }
  if (isValid) {
    Email.classList.remove("error-style");
  }
}
function lastname_pattern_checker() {
  lname_error.innerHTML = "";
  if (!lastname.value.match("^[a-zA-Z ]+$")) {
    lastname.classList.add("error-style");
    lname_error.innerHTML = "<p>Name should only contain characters</p>";
    isallcorrect = false;
  } else {
    lastname.classList.remove("error-style");
  }
}
function firstname_pattern_checker() {
  fname_error.innerHTML = "";
  if (!firstname.value.match("^[a-zA-Z ]+$")) {
    firstname.classList.add("error-style");
    fname_error.innerHTML = "<p>Name should only contain characters</p>";
    isallcorrect = false;
  } else {
    firstname.classList.remove("error-style");
  }
}
function dateofbirth_pattern_checker() {
  birthdate_error.innerHTML = "";

  const year = parseInt(date.value.substr(0, 4));
  const today = new Date();
  const minAgeDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const maxAgeDate = new Date(
    today.getFullYear() - 80,
    today.getMonth(),
    today.getDate()
  );

  if (year > 2023) {
    date.classList.add("error-style");
    birthdate_error.innerHTML = "<p>Year cannot be greater than 2023</p>";
    isallcorrect = false;
  } else if (new Date(date.value) > minAgeDate) {
    date.classList.add("error-style");
    birthdate_error.innerHTML = "<p>You must be at least 18 years old</p>";
    isallcorrect = false;
  } else if (new Date(date.value) < maxAgeDate) {
    date.classList.add("error-style");
    birthdate_error.innerHTML = "<p>Age cannot exceed 80 years</p>";
    isallcorrect = false;
  } else {
    date.classList.remove("error-style");
  }
}

function removeStyle(el) {
  el.classList.remove("error-style");
  error = document.getElementById(el.id + "_error");
  error.innerHTML = "";
}
const passInput = document.getElementById("pass");
const passImage = document.querySelector(".password-thumbnail");

function passshow() {
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
}
var birthdateInput = document.getElementById("birthdate");
var calendarIcon = document.getElementById("calendar-icon");

function checkTerms() {
  if (!terms.checked) {
    message.innerHTML =
      "<h4 style='padding:5px'>Please check terms and conditions</h4>";
    isallcorrect = false;
  }
}
function remove() {
  message.innerHTML = "";
}
