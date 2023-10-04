document.addEventListener("DOMContentLoaded", function () {
  const clouds = document.querySelectorAll(".cloud");
  const parchment2 = document.querySelector(".parchment2");

  let actionStopped = false;
  let rainElements = [];

  function startAction(cloud) {
    console.log("Action started!");
    changeBackground();
    changeCloudColor(cloud);
    rain();
    setTimeout(() => stopAction(cloud), 6000);
    actionStopped = false;
  }

  function stopAction(cloud) {
    console.log("Action stopped!");
    resetCloudColor(cloud);
    resetBackground();
    stopRain();
    actionStopped = true;
  }

  function rain () {
    const counter = 100;

    for (let i = 0; i < counter; i++) {
      const hrElement = document.createElement("HR");
      hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(hrElement);

      rainElements.push(hrElement);
    }
  }

  function stopRain() {
    rainElements.forEach(function (hrElement) {
      if (hrElement.parentNode) {
        hrElement.parentNode.removeChild(hrElement);
      }
    });
    rainElements = [];
  }

  function changeBackground(cloud) {
    const background = document.getElementById("background-video-index");
    background.style.filter = "grayscale(0.35)";
  }

  function resetBackground(cloud) {
    const background = document.getElementById("background-video-index");
    background.style.filter = "";
  }

  function changeCloudColor(cloud) {
    console.log("Changing cloud color");
    console.log(cloud);
    if (cloud) {
      cloud.style.filter = "contrast(0.5)";
    } else {
      console.log("Cloud element is undefined or null");
    }
  }

  function resetCloudColor(cloud) {
    console.log("Resetting cloud color");
    console.log(cloud);
    if (cloud) {
      cloud.style.filter = "";
    } else {
      console.log("Cloud element is undefined or null");
    }
  }

  clouds.forEach(function (cloud) {
    cloud.addEventListener("click", function () {
        console.log("Oh no, it's raining");
        startAction(cloud);
        parchment2.style.animation = "disintegrate 10s ease-out forwards";
    });
  });
});
