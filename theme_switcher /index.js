"use strict";

const themeSelect = document.getElementById("theme");
const body = document.body;

themeSelect.addEventListener("change", () => {
  body.setAttribute("data-theme", themeSelect.value);
});
