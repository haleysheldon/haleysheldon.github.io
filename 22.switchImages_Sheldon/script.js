// Array of images
const images = [
    'images/theDriverEra1.jpg',
    'images/theDriverEra2.jpg',
    'images/theDriverEra3.jpg'
];
// Track the current image index
let currentIndex = 0;

// Get the image element
const carouselImage = document.getElementById('carouselImage');

// Add a click event listener to the image
carouselImage.addEventListener('click', function() {
    // Increment the index and cycle through images
    currentIndex = (currentIndex + 1) % images.length;

    // Update the image source
    carouselImage.src = images[currentIndex];
});
