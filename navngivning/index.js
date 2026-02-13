let rabatIProcent = 0.2;

function doIt(pris, premiumMember) {
  if (premiumMember) {
    return pris - pris * rabatIProcent;
  }
  return pris;
}

let nyPris = doIt(800, true);
console.log(nyPris);

// r = rabat
// a = pris
// b = ny pris
