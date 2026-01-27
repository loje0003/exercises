// console.log("random", Math.floor(Math.random() * 101));
let hemmeligtTal = Math.floor(Math.random() * 101);

function tjekGæt() {
  let gæt = Number(document.getElementById("guess").value);
  let feedback = document.getElementById("feedback");
  let celebration = document.getElementById("celebration");

  if (gæt < hemmeligtTal) {
    feedback.innerHTML = "For lavt!";
  } else if (gæt > hemmeligtTal) {
    feedback.innerHTML = "For højt!";
  } else {
    feedback.innerHTML = "AER MANNER!";
    celebration.style.display = "block";
  }
}
