import songs from "./songs.js";

let songsBtns = document.getElementById("songs-btns");

let songSrc = document.getElementById("song-src");
let songElem = document.getElementsByTagName("audio")[0];
let songRange = document.getElementById("song-range");
let songBar = document.getElementById("song-bar");
console.dir(songElem);
console.dir(songRange);

let imgSrc = document.getElementById("img-src");

let volumeInput = document.getElementById("volume-input");

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let muteBtn = document.getElementById("mute");
let stopBtn = document.getElementById("stop");

let forwardBtn = document.getElementById("forward-btn");
let backwardBtn = document.getElementById("backward-btn");

//  --------------------------------- Create  diffenet Songs Buttons --------------------------------- \\
songs.forEach((song, indx) => {
  let songBtn = document.createElement("button");
  songBtn.innerHTML = song.songName;
  songBtn.id = indx;
  songBtn.classList.add("song-btn");
  songsBtns.appendChild(songBtn);
  console.log(song.songName);
});

let index = 0;
function loadSong(index) {
  // console.log(index);
  songSrc.src = `./songs/${songs[index].audio}.mp3`;
  songElem.load();
  songElem.addEventListener("loadeddata", function () {
    songRange.max = songElem.duration;
    console.log(songElem.duration);
    console.log(songRange.max);
  });
  songElem.play();
  // console.log(songElem.duration); // NaN
  // console.log(songRange.max); //NaN
}
songRange.addEventListener("input", function () {
  songElem.currentTime = songRange.value;
});
songElem.addEventListener("timeupdate", function (e) {
  let currTime = e.target.currentTime;
  let songDuration = e.target.duration;
  let progressPercentage = (currTime / songDuration) * 100;
  songRange.style.width = `${progressPercentage}%`;
});

// ----------------------------- songsBtns ----------------------- \\

songsBtns.addEventListener("click", function (e) {
  // console.log(e.target.id);
  // songSrc.src = songs[e.target.id].audio;
  imgSrc.src = songs[e.target.id].img;
  loadSong(e.target.id);
  console.log(songsBtns.children);
  for (let btn of songsBtns.children) {
    btn.classList.remove("selected");
  }
  e.target.classList.add("selected");
});

// Control Buttons
volumeInput.addEventListener("input", function () {
  songElem.volume = volumeInput.value;
});

playBtn.addEventListener("click", function () {
  songElem.play();
  songRange.max = songElem.duration;
  console.log(songRange.max);
  playBtn.classList.toggle("selected");
  pauseBtn.classList.remove("selected");
  stopBtn.classList.remove("selected");
  forwardBtn.classList.remove("selected");
  backwardBtn.classList.remove("selected");
});
pauseBtn.addEventListener("click", function () {
  songElem.pause();
  pauseBtn.classList.toggle("selected");
  playBtn.classList.remove("selected");
  stopBtn.classList.remove("selected");
  forwardBtn.classList.remove("selected");
  backwardBtn.classList.remove("selected");
});
stopBtn.addEventListener("click", function () {
  songElem.load();
  songElem.pause();
  songRange.style.width = "0%";
  stopBtn.classList.toggle("selected");
  playBtn.classList.remove("selected");
  pauseBtn.classList.remove("selected");
  forwardBtn.classList.remove("selected");
  backwardBtn.classList.remove("selected");
});
muteBtn.addEventListener("click", function () {
  songElem.muted = !songElem.muted;
  muteBtn.classList.toggle("selected");
});

forwardBtn.addEventListener("click", function () {
  if (index == songs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  loadSong(index);
  forwardBtn.classList.toggle("selected");
  backwardBtn.classList.remove("selected");
  playBtn.classList.remove("selected");
  pauseBtn.classList.remove("selected");
  stopBtn.classList.remove("selected");
});

backwardBtn.addEventListener("click", function () {
  if (index == 0) {
    index = songs.length - 1;
  } else {
    index--;
  }
  loadSong(index);
  backwardBtn.classList.toggle("selected");
  forwardBtn.classList.remove("selected");
  playBtn.classList.remove("selected");
  pauseBtn.classList.remove("selected");
  stopBtn.classList.remove("selected");
});
