document.getElementById("slogan").textContent = SITE.slogan;

const bouton = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
bouton.addEventListener("click", () => {
  const ouvert = menu.classList.toggle("ouvert");
  bouton.setAttribute("aria-expanded", ouvert);
});
