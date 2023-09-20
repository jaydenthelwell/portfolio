document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#train-svg").parentElement.addEventListener("click", (e) => {
    console.log("hi");
    document.getElementById("train-door").classList.toggle("d-none");
  });
});
