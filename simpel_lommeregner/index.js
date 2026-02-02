const udregnBtn = document.getElementById("udregn");

udregnBtn.addEventListener("click", udregn);

function udregn() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  const regneart = document.getElementById("dropDown").value;

  let facit;

  if (regneart === "plus") {
    facit = n1 + n2;
  } else if (regneart === "minus") {
    facit = n1 - n2;
  } else if (regneart === "gange") {
    facit = n1 * n2;
  } else if (regneart === "divider") {
    facit = n1 / n2;
  }

  document.getElementById("facit").textContent = facit;
}
