document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById('tv');
  const instructions = document.querySelector('.tv-popup-container');
  const button = document.getElementById("close-popup");
  const tv = document.getElementById("tv-off");
  const lamp = document.getElementById('lamp');
  const light = document.getElementById('light');
  const dogbed = document.getElementById('dog-bed');
  const dog = document.getElementById('dog');

  // instructions.classList.add("d-none");
  // light.classList.add("d-none");
  // dog.classList.add("d-none");

  function playVid() {
    video.play();
    console.log("Video played");
  }

  function pauseVid() {
    video.pause();
    console.log("Video paused");
  }

  video.addEventListener('ended', function() {
    pauseVid();
    console.log("Video ended");
    video.classList.add("d-none");
    console.log("Tv blank");

    setTimeout(function() {
      playVid();
      console.log("Video restarted after 3 seconds");
      video.classList.remove("d-none");
    }, 2000);
  });

  playVid();

  video.addEventListener("click", () => {
    instructions.classList.remove("d-none");
    video.classList.add("d-none");
  });

  tv.addEventListener("click", () => {
    instructions.classList.remove("d-none");
    video.classList.add("d-none");
  });

  button.addEventListener("click", () => {
    instructions.classList.add("d-none");
    video.classList.add("d-none");
  });

  lamp.addEventListener("click", () => {
    light.classList.toggle("d-none");
  });

  dogbed.addEventListener("click", () => {
    dog.classList.remove("d-none");
  });
});
