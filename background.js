const audio = new Audio(
  'assets/Candy Crush Saga Theme Song Soundtrack (1).mp3'
);
let isPlaying = false;
function playSong() {
  audio.loop = true;
  audio.autoplay = true;
  audio.play();
  isPlaying = true;
}
function pauseSong() {
  audio.pause();
  isPlaying = false;
}
chrome.runtime.onMessage.addListener(function (message) {
  if (message.action === 'playSong') {
    playSong();
  }
});
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === 'stopMusic') {
    audio.pause();
    isPlaying = false;
  }
});
