function counter() {
  const h1 = document.querySelector("h1");
  const buttonL = document.querySelector(".left");
  const buttonR = document.querySelector(".right");
  let counter = 0;

  buttonL.addEventListener("click", () => {
    counter++;
    h1.innerText = counter;
  });
  buttonR.addEventListener("click", () => {
    if (counter <= 0) {
      counter = 0;
      return;
    }
    counter--;
    h1.innerText = counter;
  });
}
counter();
