import songs from "./songs.js";

let songsBtns = document.getElementById("songs-btns");

let songSrc = document.getElementById("song-src");
let songElem = document.getElementsByTagName("audio")[0];
// console.dir(songElem);

let imgSrc = document.getElementById("img-src");

let volumeInput = document.getElementById("volume-input");

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let muteBtn = document.getElementById("mute");
let stopBtn = document.getElementById("stop");

let forwardBtn = document.getElementById("forward-btn");
let backwardBtn = document.getElementById("backward-btn");

let index = 0;
function loadSong(index) {
  console.log(index);
  songSrc.src = `./songs/${songs[index].audio}.mp3`;
  songElem.load();
  songElem.play();
}
songs.forEach((song, indx) => {
  let songBtn = document.createElement("button");
  songBtn.innerHTML = song.songName;
  songBtn.id = indx;
  songBtn.classList.add("songBtn");
  songsBtns.appendChild(songBtn);
  console.log(song.songName);
});

songsBtns.addEventListener("click", function (e) {
  console.log(e.target.id);
  // songSrc.src = songs[e.target.id].audio;
  imgSrc.src = songs[e.target.id].img;
  loadSong(e.target.id);
  // console.log(songSrc);
  // console.log(songSrc.src);
});

volumeInput.addEventListener("input", function () {
  songElem.volume = volumeInput.value;
});
playBtn.addEventListener("click", function () {
  songElem.play();
});
pauseBtn.addEventListener("click", function () {
  songElem.pause();
});
stopBtn.addEventListener("click", function () {
  songElem.load();
  songElem.pause();
});
muteBtn.addEventListener("click", function () {
  songElem.volume = 0;
});

forwardBtn.addEventListener("click", function () {
  if (index == songs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  loadSong(index);
});
backwardBtn.addEventListener("click", function () {
  if (index == 0) {
    index = songs.length - 1;
  } else {
    index--;
  }
  loadSong(index);
});
