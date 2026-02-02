// query selector til displayet
const display = document.querySelector(".display");
// fanger alle kanapperne der kan trykkes på og sætter en klik event på dem(dem der ikke er disabled i HTML)
document.querySelectorAll(".key").forEach((elm) => {
  elm.addEventListener("click", klik);
});
let displayContent = "";
let typeOfInput = "";

let firstNumVal = "";
let secondNumVal = "";
let regneArt = "";

//
//
function klik(evt) {
  // hiver værdien af data-func attributten ud af knapperne i HTML
  const btnClicked = evt.target.dataset.func;
  // skriver det der er klikket på til lommeregnerens skærm
  // updateScreen(btnClicked);
  // hvilken salgs input er det: "num" "regneart" "ligmed" "CLEAR"
  typeOfInput = whatTypeOfInput(btnClicked);
  console.log("typeOfInput:", typeOfInput);

  if (typeOfInput === "num") {
    // hvis det er et tal, så tjek om det er første eller andet tal der skal gemmes(!) og husk at tallene er strings
    // og det er en fordel her, men ikke nå der skal regnes
    if (regneArt === "") {
      firstNumVal += btnClicked;
    } else {
      secondNumVal += btnClicked;
    }

    updateScreen(btnClicked);
  } else if (typeOfInput === "regneart") {
    regneArt = btnClicked;
    updateScreen(btnClicked);
    // hvis det er en regneart, så gem den
  } else if (typeOfInput === "ligmed") {
    const result = udregn();
    resetScreen(); // ryd display først
    displayContent = result.toString();
    display.value = displayContent;

    firstNumVal = result.toString();
    secondNumVal = "";
    regneArt = "";
    // hvis det er ligmed, så regn regnestykket ud med de gemte værdier
    // ligesom i den simple lommeregner.  Der skal parseInt() på strings til tal
    // skriv resultatet til skærmen med updateScreen()
  } else if (typeOfInput === "CLEAR") {
    // reset alt: lav en reset funktion der nulstiller alle variabler
    // skærmen bliver nulstillet med resetScreen()
    resetAll();
  }
}

function whatTypeOfInput(btnClicked) {
  if (btnClicked === "0" || btnClicked === "1" || btnClicked === "2" || btnClicked === "3" || btnClicked === "4" || btnClicked === "5" || btnClicked === "6" || btnClicked === "7" || btnClicked === "8" || btnClicked === "9") {
    return "num";
  } else if (btnClicked === "+" || btnClicked === "/" || btnClicked === "*" || btnClicked === "-") {
    return "regneart";
  } else if (btnClicked === "=") {
    return "ligmed";
  } else if (btnClicked === "ac") {
    return "CLEAR";
  }
}

function udregn() {
  const num1 = Number(firstNumVal);
  const num2 = Number(secondNumVal);

  if (regneArt === "/" && num2 === 0) {
    return "Fejl";
  }

  if (regneArt === "+") {
    return num1 + num2;
  } else if (regneArt === "-") {
    return num1 - num2;
  } else if (regneArt === "*") {
    return num1 * num2;
  } else if (regneArt === "/") {
    return num1 / num2;
  }
}

function resetAll() {
  displayContent = "";
  firstNumVal = "";
  secondNumVal = "";
  regneArt = "";
  display.value = "0";
}

function updateScreen(chars) {
  displayContent += chars;
  display.value = displayContent;
}
function resetScreen() {
  displayContent = "";
  display.value = "0";
}
