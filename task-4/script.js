function rotateLeftRight() {
  const box = document.querySelector(".div");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  left.addEventListener("click", function () {
    box.style.animationName = "left";
  });
  right.addEventListener("click", function () {
    box.style.animationName = "right";
  });
}

rotateLeftRight();
