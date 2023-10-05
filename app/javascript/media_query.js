document.addEventListener("DOMContentLoaded", function () {
  const viewportMetaTag = document.querySelector('meta[name="viewport"]');
  const controllerName = viewportMetaTag.getAttribute("data-controller");
  const actionName = viewportMetaTag.getAttribute("data-action");
  const navbarFont = document.querySelector('.navbar-container');

  if (controllerName === 'home' && actionName === 'index') {
    console.log("hey");
    viewportMetaTag.setAttribute("content", "width=device-width, initial-scale=0.25");
    // navbarFont.id = "navbar-container-2";
    navbarFont.style.fontSize = "60px";
  } else {
    viewportMetaTag.setAttribute("content", "width=device-width, initial-scale=1");
  }
});
