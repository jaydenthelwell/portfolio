document.addEventListener("DOMContentLoaded", function () {
  // const post = document.getElementById("closed-postit");
  const postit = document.querySelector(".post-it-container");
  const postit2 = document.querySelector(".post-it-beach ");
  const button = document.getElementById("close-popup");

  // postit.classList.add("d-none");

  button.addEventListener("click", () => {
    console.log("Testing click");
    postit.classList.add("d-none");
    postit2.classList.remove("d-none");
  });

  postit2.addEventListener("click", () => {
    postit.classList.remove("d-none");
    // post.classList.add("d-none");
  });

  postit2.addEventListener("click", () => {
    postit.classList.remove("d-none");
    // post.classList.add("d-none");
    postit2.classList.add("d-none");
  });
});
