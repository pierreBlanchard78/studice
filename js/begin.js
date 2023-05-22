// begin.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Instructions du scroll; scroll auto retour acceuil et scroll bouton "Commencer"

// SCROLL BACK

window.scroll({ 

    top: 0, 
    behavior: 'smooth'

});

// SCROLL BEGIN

setTimeout(() => {

    const scrollBegin = main.getBoundingClientRect().top;

    beginButton.addEventListener('click', () => {

        window.scroll({ top: scrollBegin, behavior: 'smooth' });

    });

}, 1000);


