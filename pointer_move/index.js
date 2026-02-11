const root = document.documentElement;
const valuesText = document.getElementById("values");

window.addEventListener("mousemove", (e) => {
  // Procentregning: delen / detHele * 100
  const lightness = Math.round((e.clientX / window.innerWidth) * 100);
  const darkness = Math.round((e.clientY / window.innerHeight) * 100);

  // Opdater CSS custom properties
  root.style.setProperty("--lightness", `${lightness}%`);
  root.style.setProperty("--darkness", `${darkness}%`);
});
