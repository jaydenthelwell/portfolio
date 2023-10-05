document.addEventListener("DOMContentLoaded", function () {
  const train = document.querySelector("#train-svg");

  let animation1end = false;
  let animation2end = false;

  train.addEventListener("animationend", (event) => {
    if (event.animationName === "moveTrain") {
      console.log("Animation 1 has completed");
      animation1end = true;
      document.getElementById("train-door").classList.remove("d-none");
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
