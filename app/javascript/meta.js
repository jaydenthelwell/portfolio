document.addEventListener("DOMContentLoaded", function () {
  const viewportMetaTag = document.querySelector('meta[name="viewport"]');

  if (controllerName === 'home' && actionName === 'index') {
    viewportMetaTag.setAttribute("content", "width=device-width, initial-scale=0.25");
  } else {
    viewportMetaTag.setAttribute("content", "width=device-width, initial-scale=1");
  }
});
