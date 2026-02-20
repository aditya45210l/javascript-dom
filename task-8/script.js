const div = document.querySelector(".div");

div.addEventListener("mouseenter", () => {
  div.style.backgroundColor = "black";
});
div.addEventListener("mouseout", () => {
  div.style.backgroundColor = "aqua";
});
