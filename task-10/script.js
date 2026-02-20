const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

const red__span = document.querySelector("span:nth-child(1)");
const yellow__span = document.querySelector("span:nth-child(2)");
const green__span = document.querySelector("span:nth-child(3)");

const button = document.querySelectorAll("button");
console.log(button);

let id = red__span;
button.forEach((btn) => {
  btn.addEventListener("click", (element) => {
    let atr = btn.getAttribute("id");
    console.log(atr);
    console.log(id);
    if (atr == "red") {
      id.style.backgroundColor = "white";
      red__span.style.backgroundColor = atr;
      id = red__span;
    }
    if (atr == "yellow") {
      yellow__span.style.backgroundColor = atr;
      id.style.backgroundColor = "white";
      id = yellow__span;
    }
    if (atr == "green") {
      green__span.style.backgroundColor = atr;
      id.style.backgroundColor = "white";
      id = green__span;
    }
  });
});
