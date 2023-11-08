// Select the hamburger menu and navigation menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle('active');
});