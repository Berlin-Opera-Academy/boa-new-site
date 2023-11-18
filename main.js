// Select the hamburger menu and navigation menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation menu
  navMenu.classList.toggle('active');
  
  // Check if the navigation menu has the 'active' class
  if (navMenu.classList.contains('active')) {
    // If it does, set the display to 'flex'
    navMenu.style.display = 'flex';
  } else {
    // If it doesn't, set the display to 'none'
    navMenu.style.display = 'none';
  }
});
