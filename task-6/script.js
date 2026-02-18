function darkMode() {
  const body = document.querySelector("body");
  const button = document.querySelector("button");

  let dark = false;
  button.addEventListener("click", function () {
    body.style.backgroundColor = !dark ? "black" : "white";
    body.style.color = !dark ? "white" : "black";
    button.style.backgroundColor = !dark ? "white" : "black";
    button.style.color = !dark ? "black" : "white";
    dark = !dark;
  });
}
darkMode();
