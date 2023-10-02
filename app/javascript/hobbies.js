document.addEventListener("DOMContentLoaded", function () {
  const interests = document.getElementById("cv");
  const hobbies = document.querySelector(".hobbies-popup-container");

  hobbies.classList.add("d-none");

  interests.addEventListener("click", () => {
    hobbies.classList.remove("d-none");
    console.log("hey");
  });
});
