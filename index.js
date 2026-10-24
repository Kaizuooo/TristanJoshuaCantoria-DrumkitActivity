var sounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};

function makeSound(key) {
  var file = sounds[key];
  if (!file) return;

  var audio = new Audio(file);
  audio.play();
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  if (!activeButton) return;

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});
