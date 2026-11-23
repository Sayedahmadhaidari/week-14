
// Select the form and input elements
const form = document.querySelector("#registrationForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// Select error and success message elements
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const successMessage = document.querySelector("#successMessage");

// Listen for the form submit event
form.addEventListener("submit", function(event) {

  // Prevent the default form submission
  event.preventDefault();

  // Get input values and remove extra spaces
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.style.display = "none";

  // Check if all inputs are valid
  let isValid = true;

  // Validate name
  if (name.length < 3) {
    nameError.textContent =
      "Name must be at least 3 characters long.";

    isValid = false;
  }

  // Validate email
  if (!email.includes("@")) {
    emailError.textContent =
      'Email must contain the "@" character.';

    isValid = false;
  }

  // Validate password
  if (password.length < 8) {
    passwordError.textContent =
      "Password must be at least 8 characters long.";

    isValid = false;
  }

  // Show success message if all inputs are valid
  if (isValid) {
    successMessage.style.display = "block";
  }

});
