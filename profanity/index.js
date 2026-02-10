let hasTheButtenEverBeenClickedFlag = false;
let theText = document.querySelector("p").textContent;

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (hasTheButtenEverBeenClickedFlag) {
    console.log("knappen har allerede været klikket på");
  } else {
    console.log("Knappen har IKKE været klikket på endnu");
    sfw();
  }
  hasTheButtenEverBeenClickedFlag = true;
}

function sfw() {
  curseWords.forEach((word) => {
    theText = theText.replaceAll(word.bad, word.good);
    document.querySelector("p").textContent = theText;
  });
}
