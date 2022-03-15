const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const validationMessage = document.querySelector("#validationMessage");

function validateLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  return emailRegEx.test(email);
}

function formValidation(event) {
  event.preventDefault();

  if (validateLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (
    validateEmail(email.value) === true &&
    validateLength(email.value, 0) === true
  ) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateLength(address.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (
    validateLength(fullName.value, 0) === true &&
    validateLength(subject.value, 9) === true &&
    validateEmail(email.value) === true &&
    validateLength(email.value, 0) === true &&
    validateLength(address.value, 24) === true
  ) {
    validationMessage.style.display = "block";
    form.reset();
  } else {
    validationMessage.style.display = "none";
  }
}

form.addEventListener("submit", formValidation);
