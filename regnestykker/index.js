console.log("" + 1 + 0);
// console.log("" + 1 + 0);
// "" + 1 → string + number = string concatenation → "1"
// "1" + 0 → string + number = string concatenation → "10"
// Resultat: "10"

console.log("" - 1 + 0);
// console.log("" - 1 + 0);
// "" - 1 → string - number = number coercion → 0 - 1 = -1
// -1 + 0 → number + number → -1
// Resultat: -1

console.log(true + false);
// console.log(true + false);
// true → 1, false → 0
// 1 + 0 = 1
// Resultat: 1

console.log(6 / "3");
// console.log(6 / "3");
// "3" konverteres til number → 6 / 3 = 2
// Resultat: 2

console.log("2" * "3");
// console.log("2" * "3");
// Multiplikation tvinger begge til number → 2 * 3 = 6
// Resultat: 6

console.log(4 + 5 + "px");
// console.log(4 + 5 + "px");
// 4 + 5 = 9 (number + number)
// 9 + "px" → string concatenation → "9px"
// Resultat: "9px"

console.log("$" + 4 + 5);
// console.log("$" + 4 + 5);
// "$" + 4 → string + number → "$4"
// "$4" + 5 → string + number → "$45"
// Resultat: "$45"

console.log("4" - 2);
// console.log("4" - 2);
// "4" konverteres til number → 4 - 2 = 2
// Resultat: 2

console.log("4px" - 2);
// console.log("4px" - 2);
// "4px" kan ikke konverteres til number → NaN
// NaN - 2 = NaN
// Resultat: NaN
console.log(7 / 0);
// console.log(7 / 0);
// Division med 0 → Infinity
// Resultat: Infinity

console.log(" -9 " + 5);
// console.log(" -9 " + 5);
// String concatenation → " -9 5"
// Resultat: " -9 5"

console.log(" -9 " - 5);
// console.log(" -9 " - 5);
// " -9 " konverteres til number → -9
// -9 - 5 = -14
// Resultat: -14

console.log(null + 1);
// console.log(null + 1);
// null konverteres til 0 i number context → 0 + 1 = 1
// Resultat: 1

console.log(undefined + 1);
// console.log(undefined + 1);
// undefined konverteres til NaN i number context → NaN + 1 = NaN
// Resultat: NaN
