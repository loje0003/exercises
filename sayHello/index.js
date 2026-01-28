sayHello("Louise");

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

presentPet("louise", "fisk", "blob");

let firstName = "louise";
let animalType = "fisk";
let animalName = "blob";

// presentPet(firstName, animalType, animalName);

// let name = "louise";

// presentPet(name, "fisk", "blob");

function presentPet(firstName, animalType, animalName) {
  console.log(`Hello my name is ${firstName} and i have a ${animalType} called ${animalName}`);
}
