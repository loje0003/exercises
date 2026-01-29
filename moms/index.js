"use strict";
// let beloeb = 500;
// let moms = 0.25;

// console.log("beløb + moms =", beloeb * (1 + moms));

momsBeregner("500", "1.5");

function momsBeregner(beloeb, moms = 1.25) {
  console.log("beløb + moms =", beloeb * moms);
}
