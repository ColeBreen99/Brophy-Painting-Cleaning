// Get the hamburger menu and dropdown elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add event listener to toggle the dropdown on hamburger click
hamburgerMenu.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});