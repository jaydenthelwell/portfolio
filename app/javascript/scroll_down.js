document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const conditionalSection = document.querySelector(".conditional-section");

    if (currentScrollTop > lastScrollTop) {
      conditionalSection.style.animation = ("fade-out 3s ease-in-out");
      // conditionalSection.classList.add("fade-out");
    } else {
      conditionalSection.style.animation = ("fade-in 3s ease-in-out");
      // conditionalSection.classList.add("fade-in");
    }

    lastScrollTop = currentScrollTop;
  });
});
