const btnRondMenu = document.querySelector('.btn-rond-menu');
const containerLignes = document.querySelector('.container-lignes');
const navgauche = document.querySelector('.nav-gauche');
const allNavMenuItem = document.querySelectorAll('.nav-menu-item');

btnRondMenu.addEventListener('click', () => {
   containerLignes.classList.toggle('active');
});