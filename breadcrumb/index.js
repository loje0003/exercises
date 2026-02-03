const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const breadcrumbContainer = document.getElementById("breadcrumb");
const button = document.getElementById("generateBreadcrumb");

function generateBreadcrumb(data) {
  breadcrumbContainer.innerHTML = "";
  data.forEach((item, index) => {
    const li = document.createElement("li");
    // forEach kører én gang for hvert element i arrayet
    // item = et breadcrumb-punkt
    // index = placeringen (0, 1, 2 …)

    if (index === data.length - 1) {
      li.textContent = item.name;
      // Sidste element skal kun være tekst
    } else {
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.name;
      li.appendChild(link);
    }
    // laver vi et <a>-tag
    // sætter href
    // sætter teksten
    // lægger linket ind i <li>

    breadcrumbContainer.appendChild(li);
  });
  // <li>  vist på siden
}

button.addEventListener("click", () => {
  generateBreadcrumb(bc);
});
// Når brugeren klikker på knappen, så lav breadcrumben
