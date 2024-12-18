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

// Variable to track whether playback has started
let isPlaying = false;

// Function to start audio and video playback
function startPlayback() {
    // Start the background audio
    backgroundAudio.play().catch((error) => {
        console.error("Audio playback failed:", error);
    });

    // Start the video playback
    videoPlayer.play().catch((error) => {
        console.error("Video playback failed:", error);
    });

    isPlaying = true; // Mark that playback has started
    updateTextBox(); // Update the text box to show the current video's text
}

// Function to update the text in the text box
function updateTextBox() {
    textBox.textContent = videos[currentVideo].text;
}

// Function to switch videos
function switchVideo() {
    if (!isPlaying) {
        // Start playback if not already playing
        startPlayback();
        return;
    }

    // Save the current playback time for the current video
    playbackTimes[currentVideo] = videoPlayer.currentTime;

    // Determine the next video
    currentVideo = currentVideo === "death" ? "life" : "death";

    // Update the video source and text
    videoPlayer.src = videos[currentVideo].src; // Switch to the next video
    updateTextBox(); // Update the text box content

    // Load the new video source, set the time, and play
    videoPlayer.load(); // Load the new video
    videoPlayer.currentTime = playbackTimes[currentVideo]; // Resume from saved position
    videoPlayer.play(); // Start playing the video
}

// Add event listener for text box click to trigger video switching or start playback
textBox.addEventListener("click", switchVideo);

// Initialize the text box with a prompt to click
document.addEventListener("DOMContentLoaded", () => {
    textBox.textContent = "Click to start";
});
