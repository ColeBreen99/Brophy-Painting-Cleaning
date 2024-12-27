document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll('.testimonial-item');

    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.classList.add('active');
        }, index * 500); // Staggered animation for each testimonial
    });
});
