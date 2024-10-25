// Array of background images corresponding to each section
const backgroundImages = [
    'images/image01.jpg',
    'images/image02.jpg',
    'images/image03.jpg',
    'images/image04.jpg',
    'images/image05.jpg',
    'images/image06.jpg',
    'images/image07.jpg',
    'images/image08.jpg',
    'images/image09.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg'
];

// Array of background positions for each image to center the white character
const backgroundPositions = [
    '50% 50%',    // Image 01: Centered
    '40% 50%',    // Image 02: Slightly left of center
    '60% 50%',    // Image 03: Slightly right of center
    '50% 30%',    // Image 04: Adjusted upwards
    '50% 20%',    // Image 05: Further adjusted upwards
    '50% 30%',    // Image 06: Further adjusted upwards
    '55% 30%',    // Image 07: Further adjusted upwards
    '50% 25%',    // Image 08: Adjusted upwards
    '48% 52%',    // Image 09: Minor custom adjustments
    '52% 48%',    // Image 10: Minor custom adjustments
    '50% 55%',    // Image 11: Adjusted downwards
    '50% 55%'     // Image 12: Slightly below center
];

// Function to set the background image and adjust the background position
function setBackgroundImage(index) {
    const imageUrl = backgroundImages[index];
    const img = new Image();
    img.src = imageUrl;

    img.onload = function() {
        // Set the background-size to cover to ensure the image remains full screen
        document.body.style.backgroundSize = 'cover';

        // Update the background image and position
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundPosition = backgroundPositions[index]; // Focus on white character
    };
}

// Create an IntersectionObserver to detect when text boxes come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
            setBackgroundImage(index); // Set the background image based on the section
        }
    });
}, {
    threshold: 0.5 // 50% of the section needs to be visible for the observer to trigger
});

// Attach the observer to each text box
document.querySelectorAll('.text-box').forEach((section) => {
    observer.observe(section);
});

// Initial background update when the page loads
setBackgroundImage(0);
