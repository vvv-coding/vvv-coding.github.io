let playing = false;

function togglePlay() {
  playing = !playing;
  const btn = document.getElementById('play-btn');
  const audio = document.getElementById('music-player');
  
  if (playing) {
    audio.play();
    btn.textContent = 'Pause';
  } else {
    audio.pause();
    btn.textContent = 'Play';
  }
  btn.classList.toggle('active', playing);
}
