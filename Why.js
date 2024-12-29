document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll('.testimonial-item');

    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.classList.add('active');
        }, index * 500); // Staggered animation for each testimonial
    });
});

        // Get the hamburger menu and dropdown elements
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const dropdownMenu = document.querySelector('.dropdown-menu');
    
            // Add event listener to toggle the dropdown on hamburger click
        hamburgerMenu.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });


