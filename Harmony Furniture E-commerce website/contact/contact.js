function validateForm() {
  // Custom validation can be added here if needed
  return true; // If all validations pass, the form will be submitted
}

// for the navbar
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// for the scroll bar
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll");
  scroll.classList.toggle("show", window.scrollY > 0);
});
