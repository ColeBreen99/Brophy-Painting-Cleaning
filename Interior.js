let currentImageIndex = 0;
const images = [
    'Photos/Interior1.jpg',
    'Photos/Interior2.jpg',
    'Photos/Interior3.jpg',
    'Photos/Interior4.jpg',
    'Photos/Interior5.jpg',
    'Photos/Interior6.jpg',
    'Photos/Interior7.jpg',
    'Photos/Interior8.jpg',
    'Photos/Interior9.jpg',
    'Photos/Interior10.jpg',
    'Photos/Interior11.jpg',
    'Photos/Interior12.jpg',
    'Photos/Interior13.jpg',
    'Photos/Interior14.jpg',
    'Photos/Interior15.jpg',
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
    }
});