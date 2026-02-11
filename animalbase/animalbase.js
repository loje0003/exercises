"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
// Når JSON bliver loaded, fylder vi alle dyrene ind her.
let currentFilter = "*";
// Denne variabel gemmer:"cat""dog"
// "*" (som betyder “vis alle”)

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

// TODO: Add event-listeners to filter and sort buttons
function start() {
  console.log("ready");

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", selectFilter);
  });

  loadJSON();
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  currentFilter = filter;

  buildList();
}

function buildList() {
  let filteredList = filterList(allAnimals);
  displayList(filteredList);
}

function filterList(list) {
  if (currentFilter === "*") {
    return list;
  }

  return list.filter((animal) => animal.type === currentFilter);
}
// "Behold kun dem hvor type matcher currentFilter"

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(prepareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
  buildList();
}

function prepareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  //   .split(" ") betyder: Del teksten ved hvert mellemrum
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
