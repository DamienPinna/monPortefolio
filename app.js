const btnRondMenu = document.querySelector('.btn-rond-menu');
const contactForm = document.querySelector('#contact-form');
const containerLignes = document.querySelector('.container-lignes');
const navGauche = document.querySelector('.nav-gauche');
const allNavMenuItem = document.querySelectorAll('.nav-menu-item');

// Inputs formulaire
const inputPrenom = document.querySelector('#prenom');
const inputNom = document.querySelector('#nom');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');

btnRondMenu.addEventListener('click', () => {
   containerLignes.classList.toggle('active');
   navGauche.classList.toggle('menu-visible');
});

if (window.matchMedia('(max-width: 1300px)')) {
   allNavMenuItem.forEach(item => {
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
   .typeString("<strong>, Développeur</strong><span style='color: #ea39ff;'> HTML</span> ?")
   .pauseFor(1000)
   .deleteChars(6)
   .typeString("<span style='color: #03A9F4;'> CSS</span> ?")
   .pauseFor(1000)
   .deleteChars(5)
   .typeString("<span style='color: #d9122b;'> JavaScript</span> ?")
   .pauseFor(1000)
   .deleteChars(12)
   .typeString("<span style='color: #287242;'> Vue.js</span> ?")
   .pauseFor(1000)
   .deleteChars(8)
   .typeString("<span style='color: #5035C6;'> PHP</span> ?")
   .pauseFor(1000)
   .deleteChars(5)
   .typeString("<span style='color: #ff6910;'> Passionné</span> !")
   .start();


// Animation contact
const input_fields = document.querySelectorAll('input');

input_fields.forEach(field => {
   field.addEventListener('input', e => {
      if (e.target.value !== '') {
         e.target.parentNode.classList.add('animation');
      } else {
         e.target.parentNode.classList.remove('animation');
      }
   });
});


// Animation GSAP Accueil
const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-accueil');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond-fleche');

const tlAccueil = gsap.timeline({ paused: true });

tlAccueil
   .to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
   .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
   .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
   .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
   .from(btnRondAccueil, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 }, '-=1');

window.addEventListener('load', () => {
   tlAccueil.play();
});


// Animation GSAP + scrollMagic Présentation
const presentationContainer = document.querySelector('.presentation');
const titrePresentation = document.querySelector('.titre-presentation');
const titreAtout = document.querySelector('.titre-atout');
const presentationGauche = document.querySelector('.presentation-gauche');
const listePresentation = document.querySelectorAll('.item-liste');

const tlPresentation = new TimelineMax();

tlPresentation
   .from(titrePresentation, { y: -200, opacity: 0, duration: 0.6 })
   .from(titreAtout, { y: -200, opacity: 0, duration: 0.6 })
   .from(presentationGauche, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
   .staggerFrom(listePresentation, 1, { opacity: 0 }, 0.2, '-=0.5');

const controller = new ScrollMagic.Controller();

const scenePresentation = new ScrollMagic.Scene({
   triggerElement: presentationContainer,
   triggerHook: 0.5,
   reverse: false
})
   .setTween(tlPresentation)
   // .addIndicators()
   .addTo(controller)


// Animation GSAP + scrollMagic Portfolio
const portfolioContainer = document.querySelector('.portfolio');
const titrePortfolio = document.querySelector('.titre-portfolio');

/**
 * Vague 1
 */
const itemPortfolioVague1 = document.querySelectorAll('.vague1');

const tlPortfolioVague1 = new TimelineMax();

tlPortfolioVague1
   .from(titrePortfolio, { y: -50, opacity: 0, duration: 0.5 })
   .staggerFrom(itemPortfolioVague1, 1, { opacity: 0 }, 0.2, '-=0.5');

const scenePortfolioVague1 = new ScrollMagic.Scene({
   triggerElement: portfolioContainer,
   triggerHook: 0.5,
   reverse: false
})
   .setTween(tlPortfolioVague1)
   // .addIndicators()
   .addTo(controller)

/**
 * Vague 2
 */
const itemPortfolioVague2 = document.querySelectorAll('.vague2');

const tlPortfolioVague2 = new TimelineMax();

tlPortfolioVague2
   .staggerFrom(itemPortfolioVague2, 1, { opacity: 0 }, 0.2, '-=0.5');

const scenePortfolioVague2 = new ScrollMagic.Scene({
   triggerElement: itemPortfolioVague1,
   triggerHook: 0.2,
   reverse: false
})
   .setTween(tlPortfolioVague2)
   // .addIndicators()
   .addTo(controller)

   /**
 * Vague 3
 */
const itemPortfolioVague3 = document.querySelectorAll('.vague3');

const tlPortfolioVague3 = new TimelineMax();

tlPortfolioVague3
   .staggerFrom(itemPortfolioVague3, 1, { opacity: 0 }, 0.2, '-=0.5');

const scenePortfolioVague3 = new ScrollMagic.Scene({
   triggerElement: itemPortfolioVague2,
   triggerHook: 0.2,
   reverse: false
})
   .setTween(tlPortfolioVague3)
   // .addIndicators()
   .addTo(controller)


// Animation Compétences
const sectionCompetences = document.querySelector('.section-range');
const titreCompetences = document.querySelector('.titre-competences');
const allLabels = document.querySelectorAll('.label-skill');
const allPourcents = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allGreyBarres = document.querySelectorAll('.barre-grise');

const tlCompetences = new TimelineMax();

tlCompetences
   .from(titreCompetences, { opacity: 0, duration: 0.6 })
   .staggerFrom(allLabels, 0.5, { y: -50, opacity: 0 }, 0.1, '-=0.5')
   .staggerFrom(allPourcents, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
   .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')
   .staggerFrom(allGreyBarres, 0.5, { y: -10, opacity: 0 }, 0.1, '-=1')

const sceneCompetences = new ScrollMagic.Scene({
   triggerElement: sectionCompetences,
   triggerHook: 0.5,
   reverse: false
})
   .setTween(tlCompetences)
   // .addIndicators()
   .addTo(controller)


// Formulaire de contact
$(function () {
   $('#contact-form').submit(function (event) {

      event.preventDefault();
      $('.comments').empty();
      var postdata = $('#contact-form').serialize();

      $.ajax({
         type: 'POST',
         url: 'contact.php',
         data: postdata,
         dataType: 'json',
         success: function (result) {
            if (result.isSuccess) {
               $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté !</p>");
               $('#contact-form')[0].reset();
            } else {
               $('#prenom + .comments').html(result.prenomError);
               $('#nom + .comments').html(result.nomError);
               $('#email + .comments').html(result.emailError);
               $('#message + .comments').html(result.messageError);
            }
         }
      });
   });
});