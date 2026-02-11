function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});

// i stedet for at sætte en event listener på hvert enkelt barn-element,
// kan vi sætte den på parent-elementet, og lade events “boble” op til parenten.
