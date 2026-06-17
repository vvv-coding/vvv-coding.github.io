const quotes = [
  { text: "A dream written down with a date becomes a goal. A goal broken down into steps becomes a plan. A plan backed by action makes your dream come true.", person: "Greg Reid" },
  { text: "Your dreams don't disappear when you ignore them, they become someone else's achievements.", person: "Anonymous" },
  { text: "You don't have to be great to start, but you have to start to be great.", person: "Zig Ziglar" },
  { text: "Hard work beats talent when talent doesn't work hard.", person: "Tim Notke" },
  { text: "The two most important days in your life are the day you are born and the day you find out why.", person: "Mark Twain" },
  { text: "All my victories belong to God and all my lossed are mine alone.", person: "Anonymous" },
  { text: "Imagine meeting the person you could have become. The real heartbreak is having no explanation for why you never tried.", person: "Anonymous" },
  { text: "Fact: After working 40 hours in a week, productivity decreases by up to 50%.", person: "Survey" },
  { text: "Amateurs sit and wait for inspiration. The rest of us just get up and go to work.", person: "Stephen King" },
  { text: "Your Nervous System will always choose familiar chaos over unfamiliar peace until you learn to heal and choose differently", person: "Anonymous" },
  { text: "While we are postponing, life speeds by.", person: "Seneca" },
  { text: "A year from now, you'll wish you had started today. The pain of discipline lasts hours, the pain of regret lasts years.", person: "Anonymous" },
];

let playing = false;

function loadQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-text').textContent = quotes[idx].text;
  document.getElementById('quote-person').textContent = '— ' + quotes[idx].person;
}

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

loadQuote();
