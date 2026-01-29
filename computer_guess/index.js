const start_btn = document.querySelector(".start");
const lowBtn = document.querySelector(".forLavtBtn");
const highBtn = document.querySelector(".forHojtBtn");
const correctBtn = document.querySelector(".rigtigtBtn");
const correct = document.querySelector("#correct");
const computerGuess = document.querySelector("#computerGuess");

let min, max, guess, count;

window.addEventListener("load", startSpil);

function startSpil() {
  // Tilføj event listeners kun én gang
  start_btn.addEventListener("click", startClick);
  lowBtn.addEventListener("click", forLavt);
  highBtn.addEventListener("click", forHojt);
  correctBtn.addEventListener("click", rigtigt);

  lowBtn.disabled = true;
  highBtn.disabled = true;
  correctBtn.disabled = true;
}

function startClick() {
  min = 0;
  max = 100;
  count = 0;

  lowBtn.disabled = false;
  highBtn.disabled = false;
  correctBtn.disabled = false;
  resetText();
  computerChoice();
}

function computerChoice() {
  guess = Math.floor((min + max) / 2);
  count++;
  computerGuess.classList.remove("hidden");
  computerGuess.innerHTML = `<h2>Computeren gættede på ${guess}</h2>`;
}

function forLavt() {
  min = guess;
  computerChoice();
}

function forHojt() {
  max = guess;
  computerChoice();
}

function rigtigt() {
  computerGuess.classList.add("hidden");
  lowBtn.disabled = true;
  highBtn.disabled = true;
  correctBtn.disabled = true;

  correct.classList.remove("hidden");
  correct.innerHTML = `<h2>Computeren gættede tallet ${guess} på ${count} forsøg!</h2>`;
}

function resetText() {
  correct.classList.add("hidden");
}
