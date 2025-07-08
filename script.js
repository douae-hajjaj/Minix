let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const songSelect = document.getElementById("song-select");
const songTitle = document.getElementById("song-title");
const cover = document.getElementById("cover");

function playPause() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
}

songSelect.addEventListener("change", () => {
  const selected = songSelect.value;
  audio.src = `songs/${selected}.mp3`;
  cover.src = `covers/${selected}.jpg`;
  songTitle.textContent = songSelect.options[songSelect.selectedIndex].text;
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
});

audio.addEventListener("ended", () => {
  isPlaying = false;
  playBtn.textContent = "▶";
});
