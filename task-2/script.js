function changeColor() {
  const constdiv = document.querySelector(".div");
  let color = "gray";
  console.log(constdiv);
  constdiv.addEventListener("click", function () {
    switch (color) {
      case "red":
        color = "green";
        break;
      case "green":
        color = "blue";
        break;
      case "blue":
        color = "red";
        break;
      case "gray":
        color = "red";
    }

    console.log(color);

    constdiv.style.backgroundColor = color;
  });
}

changeColor();
