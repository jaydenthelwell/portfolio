document.addEventListener("DOMContentLoaded", function () {
  const start = document.getElementById("start-clicked");
  const train = document.querySelector("#train-svg");
  const parchment = document.querySelector(".pop-up-container");
  const parchment2 = document.querySelector(".parchment2");
  const button = document.getElementById("close-popup");

  train.classList.add("d-none");
  train.style.animation = "none";
  // parchment.classList.add("d-none");

  // button.addEventListener("click", () => {
  //   console.log("Testing click");
  //   parchment.classList.add("d-none");
  //   train.style.animation = "moveTrain 7s linear";
  //   train.classList.remove("d-none");
  //   parchment2.classList.remove("d-none");
  // });

  start.addEventListener("click", () => {
    // parchment.classList.remove("d-none");
    start.classList.add("d-none");
    train.style.animation = "moveTrain 7s linear";
    train.classList.remove("d-none");
  });

  parchment2.addEventListener("click", () => {
    parchment.classList.remove("d-none");
    start.classList.add("d-none");
    parchment2.classList.add("d-none");
  });
});
