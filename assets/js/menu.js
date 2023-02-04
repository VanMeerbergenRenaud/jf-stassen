// Javascript pour le menu
const menuContainer = document.getElementById("menu");
const menuButton = document.querySelector('.menuButton');

menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
});