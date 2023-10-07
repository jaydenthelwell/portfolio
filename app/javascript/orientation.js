function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;

  if (isLandscape) {
      document.getElementById("rotate-message").style.display = "none";
  } else {
      document.getElementById("rotate-message").style.display = "flex";
  }
}

checkOrientation();


window.addEventListener("resize", checkOrientation);
