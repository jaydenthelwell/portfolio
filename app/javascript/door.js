document.addEventListener("DOMContentLoaded", function () {
  const beachHut = document.querySelector(".beach-hut");
  const door = document.getElementById("beach_hut_door");

  beachHut.addEventListener("click", () => {
    console.log("Testing if door is clickable");
    door.classList.remove("d-none");
    beachHut.classList.add("d-none");
  });
});
