// Array to store the video file paths
const videos = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4", "videos/video04.mp4", "videos/video05.mp4"];

// Get the video element and text box element
const videoPlayer = document.getElementById('videoPlayer');
const textBox = document.getElementById('textBox');

let isFirstClick = true;

// Function to pick a random video (excluding the currently playing one)
function pickRandomVideo(currentVideo) {
    let newVideo;
    do {
        newVideo = videos[Math.floor(Math.random() * videos.length)];
    } while (newVideo === currentVideo);
    return newVideo;
}

// Add an event listener to the text box for click events
textBox.addEventListener('click', () => {
    // Unmute all videos after the first click
    if (isFirstClick) {
        videoPlayer.muted = false;
        isFirstClick = false;
    }

    // Remember the current playback time
    const currentTime = videoPlayer.currentTime;

    // Pick a new random video
    const newVideo = pickRandomVideo(videoPlayer.src);

    // Set the new video source and current time
    videoPlayer.src = newVideo;
    videoPlayer.currentTime = currentTime;

    // Play the new video
    videoPlayer.play();
});
