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
  const skills = document.querySelector(".technical-skills-popup-container");
  const education = document.querySelector(".education-popup-container");
  const work = document.querySelector(".work-popup-container");
  const button = document.getElementById("close-option");
  const skillsButton = document.getElementById("skills-close-option");
  const educationButton = document.getElementById("education-close-option");
  const workButton = document.getElementById("work-close-option");
  const dog = document.getElementById('dog');

  // hobbies.classList.add("d-none");

  stick.addEventListener("click", () => {
    console.log("Testing stick event listener");
    experience.classList.add("checked");
    work.classList.remove("d-none");
  });
  backpack.addEventListener("click", () => {
    console.log("Testing stick event listener");
    academic.classList.add("checked");
    education.classList.remove("d-none");
  });
  lamp.addEventListener("click", () => {
    console.log("Testing stick event listener");
    technologies.classList.add("checked");
    skills.classList.remove("d-none");
  });
  dogbed.addEventListener("click", () => {
    console.log("Testing stick event listener");
    interests.classList.add("checked");
    hobbies.classList.remove("d-none");
    // button.classList.remove("d-none");
  });
  dog.addEventListener("click", () => {
    console.log("Testing stick event listener");
    interests.classList.add("checked");
    hobbies.classList.remove("d-none");
    // button.classList.remove("d-none");
  });
  button.addEventListener("click", () => {
    // skills.classList.add("d-none");
    hobbies.classList.add("d-none");
  });
  skillsButton.addEventListener("click", () => {
    skills.classList.add("d-none");
  });
  educationButton.addEventListener("click", () => {
    education.classList.add("d-none");
    console.log("Testing");
  });
  workButton.addEventListener("click", () => {
    work.classList.add("d-none");
    console.log("Testing");
  });
});
