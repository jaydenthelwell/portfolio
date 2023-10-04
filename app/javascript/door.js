document.addEventListener("DOMContentLoaded", function () {
  const door = document.getElementById("door");

  door.addEventListener("click", () => {
    console.log("Testing if door is clickable");
    const doorImg = door.querySelector("img");
    doorImg.style.visibility = "visible";
  });
});
