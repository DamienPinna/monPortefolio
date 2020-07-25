const btnRondMenu = document.querySelector('.btn-rond-menu');
const containerLignes = document.querySelector('.container-lignes');
const navGauche = document.querySelector('.nav-gauche');
const allNavMenuItem = document.querySelectorAll('.nav-menu-item');

btnRondMenu.addEventListener('click', () => {
   containerLignes.classList.toggle('active');
   navGauche.classList.toggle('menu-visible');
});

if(window.matchMedia('(max-width: 1300px)')) {
   allNavMenuItem.forEach( item => {
      item.addEventListener('click', () => {
         containerLignes.classList.toggle('active');
         navGauche.classList.toggle('menu-visible');
      });
   });
}