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

// Animation écriture
const texteAnimation = document.querySelector('.texte-animation');

let typewriter = new Typewriter(texteAnimation, {
   loop: false,
   deleteSpeed: 20
});

typewriter
   .pauseFor(1800)
   .changeDelay(90)
   .typeString("Moi c'est Damien PINNA")
   .changeDelay(70)
   .typeString("<strong>, Développeur Junior</strong><span style='color: #ea39ff;'> HTML</span> !")
   .pauseFor(1000)
   .deleteChars(6)
   .typeString("<span style='color: #03A9F4;'> CSS</span> !")
   .pauseFor(1000)
   .deleteChars(5)
   .typeString("<span style='color: #d9122b;'> JavaScript</span> !")
   .pauseFor(1000)
   .deleteChars(12)
   .typeString("<span style='color: #287242;'> Vue.js</span> !")
   .pauseFor(1000)
   .deleteChars(8)
   .typeString("<span style='color: #349717;'> Node.js</span> !")
   .pauseFor(1000)
   .deleteChars(9)
   .typeString("<span style='color: #ff6910;'> Full-Stack JS !")
   .start();