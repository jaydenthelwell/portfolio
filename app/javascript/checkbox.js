document.addEventListener("DOMContentLoaded", () => {
  const stick = document.getElementById('stick');
  const experience = document.getElementById('experience');
  const backpack = document.getElementById('backpack');
  const academic = document.getElementById('academic');
  const lamp = document.getElementById('lamp');
  const technologies = document.getElementById('technologies');
  const dogbed = document.getElementById('dog-bed');
  const interests = document.getElementById('interests');
  const hobbies = document.querySelector(".hobbies-popup-container");
  const button = document.getElementById("close-hobbies");
  const dog = document.getElementById('dog');

  hobbies.classList.add("d-none");

  stick.addEventListener("click", () => {
    console.log("Testing stick event listener");
    experience.classList.add("checked");
  });
  backpack.addEventListener("click", () => {
    console.log("Testing stick event listener");
    academic.classList.add("checked");
  });
  lamp.addEventListener("click", () => {
    console.log("Testing stick event listener");
    technologies.classList.add("checked");
  });
  dogbed.addEventListener("click", () => {
    console.log("Testing stick event listener");
    interests.classList.add("checked");
    hobbies.classList.remove("d-none");
  });
  dog.addEventListener("click", () => {
    console.log("Testing stick event listener");
    interests.classList.add("checked");
    hobbies.classList.remove("d-none");
  });
  button.addEventListener("click", () => {
    hobbies.classList.add("d-none");
  });
});
