document.addEventListener("DOMContentLoaded", function (){
  const mapObject = document.getElementById('jam');
  const descriptionElement = document.getElementById('jam-description');
  const mapObject2 = document.getElementById('groove');
  const descriptionElement2 = document.getElementById('groove-description');
  const mapObject3 = document.getElementById('candella');
  const descriptionElement3 = document.getElementById('candella-description');
  const mapObject4 = document.getElementById('realfood');
  const descriptionElement4 = document.getElementById('realfood-description');

  descriptionElement.classList.add("d-none");
  descriptionElement2.classList.add("d-none");
  descriptionElement3.classList.add("d-none");
  descriptionElement4.classList.add("d-none");


  // if (window.innerWidth < 1000) {

  //   // mapObject.addEventListener('click', function () {
  //   //   descriptionElement.classList.remove("d-none");
  //   // });

  //   // mapObject2.addEventListener('click', function () {
  //   //   descriptionElement2.classList.remove("d-none");
  //   // });
  // }
  // else {

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

    mapObject3.addEventListener('mouseover', function () {
      descriptionElement3.classList.remove("d-none");
    });

    mapObject3.addEventListener('mouseout', function () {
      descriptionElement3.classList.add("d-none");
    });

    mapObject4.addEventListener('mouseover', function () {
      descriptionElement4.classList.remove("d-none");
    });

    mapObject4.addEventListener('mouseout', function () {
      descriptionElement4.classList.add("d-none");
    });
  // }
})
