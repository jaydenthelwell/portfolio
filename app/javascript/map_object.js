document.addEventListener("DOMContentLoaded", function (){
  const mapObject = document.getElementById('jam');
  const descriptionElement = document.getElementById('jam-description');
  const mapObject2 = document.getElementById('groove');
  const descriptionElement2 = document.getElementById('groove-description');

  descriptionElement.classList.add("d-none");
  descriptionElement2.classList.add("d-none");

  mapObject.addEventListener('mouseover', function () {
    descriptionElement.classList.remove("d-none");
  });

  mapObject.addEventListener('mouseout', function () {
    descriptionElement.classList.add("d-none");
  });

  mapObject2.addEventListener('mouseover', function () {
    descriptionElement2.classList.remove("d-none");
  });

  mapObject2.addEventListener('mouseout', function () {
    descriptionElement2.classList.add("d-none");
  });
})
