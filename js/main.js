"use strict";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "CL":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
}
