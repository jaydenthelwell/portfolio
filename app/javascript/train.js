document.addEventListener("DOMContentLoaded", function () {
  const train = document.querySelector("#train-svg");
  const speech = document.querySelector(".speech-container");

  let animation1end = false;
  let animation2end = false;

  const words = ["Hi, I'm Jayden", "Welcome to my portfolio!", "To skip to my projects, select 'Options', then 'Project Island'.", "Otherwise, enjoy the journey at your own pace.", "Click the train to move on to the next stage."];
  let wordIndex = 0;

  function startTextAnimation() {
    const text = document.getElementById("text-placeholder");
    const word = words[wordIndex];
    text.style.color = "black"

    let index = 0;

    const timer = setInterval(function () {
      text.textContent = word.substr(0, index);
      index++;

      if (index > word.length) {
        clearInterval(timer);
        if (wordIndex < words.length - 1) {
          setTimeout(startTextAnimation, 1500);
          wordIndex++;
        }
      }
    }, 100);

    speech.addEventListener("click", () => {
      if (wordIndex === 4) {
        setTimeout(startTextAnimation, 1500);
        // wordIndex++;
        console.log("Text cycle completed.");
      }
    });
  }


  train.addEventListener("animationend", (event) => {
    if (event.animationName === "moveTrain") {
      console.log("Animation 1 has completed");
      animation1end = true;
      document.getElementById("train-door").classList.remove("d-none");
      speech.classList.add("show");
      setTimeout(startTextAnimation, 1000);

    } else if (event.animationName === "moveTrain2") {
      console.log("Animation 2 has completed");
      animation2end = true;
    }

    if (animation1end && animation2end) {
      window.location.href = "/beach";
    }
  });

  train.parentElement.addEventListener("click", () => {
    if (animation1end) {
      // train.id = "train-svg-2";
      train.style.animation = "moveTrain2 7s linear forwards";

      console.log("Starting Animation 2");
    } else {
      console.log("Animation 1 has not ended yet");
    }
  });
});
