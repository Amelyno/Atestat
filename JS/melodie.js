const audio = document.getElementById('background-music');
const playPauseBtn = document.getElementById('play-pause-btn');
const volumeSlider = document.getElementById('volume-slider');

let isPlaying = false;

function updateSliderColor(value) {
    const percent = value * 100;
    volumeSlider.style.background = `linear-gradient(to right, #ffd789 ${percent}%, #e0e0e0 ${percent}%)`;
}

updateSliderColor(volumeSlider.value);

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶ Play';
    volumeSlider.style.display = 'none';
    } else {
    audio.play();
    playPauseBtn.textContent = '⏸ Pause';
    volumeSlider.style.display = 'block';
    }
    isPlaying = !isPlaying;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
    updateSliderColor(volumeSlider.value);
});