function checkOrientation() {
  const isLandscape = window.innerWidth > window.innerHeight;

  // If the orientation is landscape, hide the message
  if (isLandscape) {
      document.getElementById("rotate-message").style.display = "none";
  } else {
      // If the orientation is portrait, show the message
      document.getElementById("rotate-message").style.display = "flex";
  }
}

// Initial check on page load
checkOrientation();

// Listen for orientation changes
window.addEventListener("resize", checkOrientation);
