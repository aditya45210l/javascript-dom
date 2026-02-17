function changeTextColorWhenClick() {
  const h1 = document.querySelector("h1");
  const button = document.querySelector(".btn");

  button.addEventListener("click", function () {
    console.log("i cliecked!");
    h1.style.color = "red";
    h1.innerText = "Welcome";
  });
}

changeTextColorWhenClick();
