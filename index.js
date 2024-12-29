function triggerConfetti() {
    const container = document.getElementById("confetti-container");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
  
    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement("div");
      confettiPiece.classList.add("confetti");
      confettiPiece.style.left = Math.random() * 100 + "vw";
      confettiPiece.style.animationDuration = Math.random() * 3 + 2 + "s";
      confettiPiece.style.animationDelay = Math.random() * 2 + "s";
      confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(confettiPiece);
  
      setTimeout(() => {
        container.removeChild(confettiPiece);
      }, 10000); // Remove confetti after 5 seconds
    }
  }

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Function to generate random values for firework position and animation timing
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to launch a firework
    function launchFirework() {
        const fireworkContainer = document.querySelector(".firework-container"); // Ensure this exists

        if (!fireworkContainer) {
            console.error('Firework container not found');
            return; // Exit the function if the container is not found
        }

        const firework = document.createElement('div');
        
        // Randomize the firework's size, position, and animation timing
        const size = randomIntFromRange(30, 40);  // Random size between 30px and 40px
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.top = `${randomIntFromRange(0, window.innerHeight - size)}px`;  // Random Y position
        firework.style.left = `${randomIntFromRange(0, window.innerWidth - size)}px`; // Random X position
        firework.style.animationDuration = `${randomIntFromRange(1, 2)}s`;  // Random animation duration (1-2 seconds)

        // Randomly assign color class
        const colorClass = `firework-${randomIntFromRange(1, 5)}`; 
        firework.classList.add('firework', colorClass);
        
        // Append the firework to the container
        fireworkContainer.appendChild(firework);

        // Remove the firework after the animation completes
        firework.addEventListener('animationend', () => {
            fireworkContainer.removeChild(firework);
        });
    }

    // Function to trigger fireworks for 10 seconds
    function triggerFireworksContinuously() {
        const duration = 10000; // 10 seconds
        const endTime = Date.now() + duration;

        const fireworkInterval = setInterval(() => {
            if (Date.now() > endTime) {
                clearInterval(fireworkInterval);  // Stop the interval after 10 seconds
            } else {
                launchFirework();  // Launch a firework at random intervals
            }
        }, randomIntFromRange(200, 500)); // Random interval between fireworks (200ms to 500ms)
    }

    // Event listener for button click
    const button = document.getElementById("audio-toggle");
    if (button) {
        button.addEventListener("click", triggerConfettiAndFireworks);  // Start fireworks when button is clicked
    }

    // Function to trigger fireworks and confetti (if you have a confetti function)
function triggerConfettiAndFireworks() {
    console.log('Celebration triggered!');
    triggerFireworksContinuously(); 
    triggerConfetti(); 
}

});




document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    const toggleButton = document.getElementById("audio-toggle");

    // Set initial volume
    audio.volume = 0.04;

    toggleButton.addEventListener("click", function() {
        // Check if the audio is already playing
        if (audio.paused) {
            // If paused, play the audio from the beginning
            audio.currentTime = 0;
            audio.play();
        }
        else {
            audio.currentTime = 0;
        }
    });
})

// Get the hamburger menu and dropdown elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add event listener to toggle the dropdown on hamburger click
hamburgerMenu.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});



