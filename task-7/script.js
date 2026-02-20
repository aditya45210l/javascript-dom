function displayText() {
  const h1 = document.querySelector("h1");
  const input = document.querySelector("input");

  input.addEventListener("input", (event) => {
    const value = event.target.value;
    console.log(value);
    h1.innerText = value;
  });
}
displayText();
