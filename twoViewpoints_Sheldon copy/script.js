// Get references to the video player, text box, and audio elements
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");
const backgroundAudio = document.getElementById("backgroundAudio");

// Define video file paths and corresponding text
const videos = {
    death: { src: "videos/death.mp4", text: "I'm going to die" },
    life: { src: "videos/life.mp4", text: "But I'm so alive" },
};

// Variables to track the current video and playback times
let currentVideo = "death";
let playbackTimes = {
    death: 0,
    life: 0,
};

// Ensure the background audio starts playing
function startAudio() {
    if (backgroundAudio.paused) {
        backgroundAudio.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
    }
}

// Function to update the text in the text box
function updateTextBox() {
    textBox.textContent = videos[currentVideo].text;
}

// Function to switch videos
function switchVideo() {
    // Save the current playback time for the current video
    playbackTimes[currentVideo] = videoPlayer.currentTime;

    // Determine the next video
    if (currentVideo === "death") {
        currentVideo = "life";
    } else {
        currentVideo = "death";
    }

    // Update the video source and text
    videoPlayer.src = videos[currentVideo].src; // Switch to the next video
    updateTextBox(); // Update the text box text

    // Load the new video source, set the time, and play
    videoPlayer.load(); // Load the new video
    videoPlayer.currentTime = playbackTimes[currentVideo]; // Resume from saved position
    videoPlayer.play(); // Start playing the video

    // Ensure the background audio continues playing
    startAudio();
}

// Add event listener for text box click to trigger video switching
textBox.addEventListener("click", switchVideo);

// Start audio playback and initialize the text box when the page loads
document.addEventListener("DOMContentLoaded", () => {
    startAudio();
    updateTextBox(); // Set initial text box content
});

