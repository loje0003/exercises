"use strict";
console.log("hvilket theme er gemt", localStorage.getItem("theme"));

document.querySelector("#theme").addEventListener("change", theChange);
setTheme(localStorage.getItem("theme"));

function theChange(evt) {
  console.log("change", evt.target.value);
  setTheme(evt.target.value);
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.querySelector("body").dataset.theme = theme;
}
