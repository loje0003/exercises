"use strict";
// let beloeb = 500;
// let moms = 0.25;

// console.log("beløb + moms =", beloeb * (1 + moms));

fullPrice(500, 33);

function fullPrice(price, moms = 25) {
  const momsFactor = 1 + moms / 100;
  console.log("momsfaktor", momsFactor);
  console.log("fullPrice", price * momsFactor);
}
