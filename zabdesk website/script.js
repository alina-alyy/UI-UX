firstname = document.getElementById("fname");
lastname = document.getElementById("lname");
Email = document.getElementById("email");
password = document.getElementById("pass");
date = document.getElementById("birthdate");
var isallcorrect = true;

var userEmail = "abc@abc.com"
var userPass = "abc"

function signup() {
  isallcorrect = true;
  message.innerHTML = "";
 
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
  }
  
  if (isallcorrect === true && Email.value.trim() === userEmail && password.value.trim() === userPass) {
    window.location.href = "./home/home.html"
  }else if (isallcorrect) {
    message.innerHTML =
      "<h4 style='padding:5px; color: indianred;'>Invalid email or password</h4>";
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


function remove() {
  message.innerHTML = "";
}
