const button = document.querySelector("button");
const p = document.querySelector("p");

let isClicked = false;

button.addEventListener("click", () => {
  if (isClicked === false) {
    p.innerText = "clicked";
    isClicked = true;
  }
});
