document.getElementById("slogan").textContent = SITE.slogan;
document.getElementById("footer-ville").textContent = SITE.ville;
document.getElementById("annee").textContent = new Date().getFullYear();

const bouton = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

bouton.addEventListener("click", () => {
  const ouvert = menu.classList.toggle("ouvert");
  bouton.setAttribute("aria-expanded", ouvert);
});

// Ferme le menu quand on clique sur un lien
menu.querySelectorAll("a").forEach((lien) => {
  lien.addEventListener("click", () => {
    menu.classList.remove("ouvert");
    bouton.setAttribute("aria-expanded", false);
  });
});
