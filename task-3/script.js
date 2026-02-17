function hideAndDisplayBox() {
  const div = document.querySelector(".div");
  const button = document.querySelector("button ");
  let hide = false;
  button.addEventListener("click", function () {
    div.style.display = hide ? "none" : "block";
    button.innerHTML = hide ? "unhide" : "hide";
    hide = !hide;
  });
}

hideAndDisplayBox();
