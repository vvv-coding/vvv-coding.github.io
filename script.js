const quotes = [
  { text: "Where your attention goes, your time goes.", person: "Idowu Koyenikan" },
  { text: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
  { text: "You don't have to be great to start, but you have to start to be great.", person: "Zig Ziglar" },
  { text: "Hard work beats talent when talent doesn't work hard.", person: "Tim Notke" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", person: "Mark Twain" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", person: "Robert Collier" },
  { text: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { text: "Fact: After working 40 hours in a week, productivity decreases by up to 50%.", person: "Survey" },
  { text: "Great things never come from comfort zones.", person: "Unknown" },
  { text: "Dream it. Wish it. Do it.", person: "Unknown" },
  { text: "Little by little, one travels far.", person: "J.R.R. Tolkien" },
  { text: "You are braver than you believe, stronger than you seem.", person: "A.A. Milne" },
];

const songs = [
  "Weightless — Marconi Union",
  "Experience — Ludovico Einaudi",
  "Comptine d'un autre été — Yann Tiersen",
  "Clair de Lune — Debussy",
  "Gymnopédie No.1 — Erik Satie",
];

let playing = false;
let songIndex = 0;

function loadQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-text').textContent = quotes[idx].text;
  document.getElementById('quote-person').textContent = '— ' + quotes[idx].person;
}

function togglePlay() {
  playing = !playing;
  const btn = document.getElementById('play-btn');
  btn.textContent = playing ? '⏸ Pause' : '▶ Play';
  btn.classList.toggle('active', playing);
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  document.getElementById('song-name').textContent = songs[songIndex];
}

loadQuote();