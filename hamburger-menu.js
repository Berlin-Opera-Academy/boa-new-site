// Select the hamburger menu and navigation menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// Function to toggle the navigation menu
function toggleNavMenu() {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener("click", () => {
  toggleNavMenu();
  hamburgerMenu.classList.toggle("open");
});

// Add a click event listener to the document
document.addEventListener("click", (event) => {
  // Check if the click is outside the navigation menu and hamburger menu
  if (
    !navMenu.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    // If the navigation menu is active, hide it
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navMenu.style.display = "none";
      hamburgerMenu.classList.remove("open");
    }
  }
});
