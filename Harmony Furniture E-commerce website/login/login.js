let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});
login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});

function validateEmail(inputId) {
  var emailInput = document.getElementById(inputId);
  var emailValue = emailInput.value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailInput.setCustomValidity(
      "Invalid email. Please enter a valid email address."
    );
  } else {
    emailInput.setCustomValidity("");
  }
}

function validatePassword(inputId) {
  var passwordInput = document.getElementById(inputId);
  var passwordValue = passwordInput.value;
  var passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])[A-Za-z\d-+_!@#$%^&*.,?]{6,12}$/;

  if (!passwordPattern.test(passwordValue)) {
    passwordInput.setCustomValidity(
      "Password should contain at least one lowercase letter, one uppercase letter, one digit, one operator, and be between 6 and 12 characters."
    );
  } else {
    passwordInput.setCustomValidity("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for submit button to validate confirm password
  var submitButton = document.querySelector(".submit-btn");
  var originalPasswordInput = document.getElementById("register-password");
  var confirmPasswordInput = document.getElementById("confirm-password");

  submitButton.addEventListener("click", function () {
    validateConfirmPassword(originalPasswordInput, confirmPasswordInput);
  });
});

function validateConfirmPassword(originalPasswordInput, confirmPasswordInput) {
  if (originalPasswordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
}

function validateLogin() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  // Example login logic for admin
  if (email === "user@example.com" && password === "Password123@") {
    window.location.href = "../admin/admin.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

function validateRegister() {
  var username = document.getElementById("register-username").value;
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please enter matching passwords.");
    return;
  }

  // Additional registration validation for username
  if (username.length < 5) {
    alert("Username should be at least 5 characters long.");
    return;
  }

  // Simulate successful registration
  alert("Registration successful!");
}

// to view password

function togglePasswordVisibility(passwordInputId) {
  var passwordInput = document.getElementById(passwordInputId);
  var passwordIcon =
    passwordInput.parentElement.querySelector(".view-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
  } else {
    passwordInput.type = "password";
    passwordIcon.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
  }
}

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll");
  scroll.classList.toggle("show", window.scrollY > 0);
});
