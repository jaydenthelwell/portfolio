document.addEventListener("DOMContentLoaded", () => {
    const stick = document.getElementById('stick');
    const experience = document.getElementById('experience');
    const backpack = document.getElementById('backpack');
    const academic = document.getElementById('academic');
    const lamp = document.getElementById('lamp');
    const technologies = document.getElementById('technologies');
    const dogbed = document.getElementById('dog-bed');
    const cv = document.getElementById('cv');


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
      cv.classList.add("checked");
    });
  });
