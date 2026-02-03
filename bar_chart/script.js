const list = document.querySelector("ul");
// Finder den første <ul> i HTML og gemmer den i list.
const li = document.createElement("li");
// Laver et nyt <li>-element, men det findes kun i JavaScript – ikke i HTML endnu.
li.style.setProperty("--height", "30");
// Sætter CSS-variablen --height til 30
list.appendChild(li);
// Nu dukker søjlen op på siden

function getRandomNumber() {
  return Math.floor(Math.random() * 101); // 0–100
}
// Giver et helt tal mellem 0 og 100

const value = getRandomNumber();
li.style.setProperty("--height", value);
// Tager et tilfældigt tal
// Bruger det som højden på søjlen

function addBar(value) {
  const li = document.createElement("li");
  li.style.setProperty("--height", value);
  list.appendChild(li);
}
// laver en ny <li>
// giver den en højde
// putter den ind i <ul>

const data = [];
// Et array der husker alle værdierne

setInterval(() => {
  // Alt herinde kører én gang i sekundet
  const value = Math.floor(Math.random() * 101);

  data.push(value);
  // Læg tallet bagerst i arrayet
  addBar(value);
  //   Tegner søjlen på skærmen

  if (data.length > 20) {
    data.shift(); // fjern første værdi i arrayet
    list.removeChild(list.firstElementChild); // fjern ældste søjle
  }
}, 1000);
