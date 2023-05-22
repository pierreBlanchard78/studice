// diceWelcomeRoll.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Animation du dé de l'acceuil

for ( diceWelcomedisplay of diceWelcomePathArray) {

    diceWelcomedisplay.style.display = 'none';
    
}

diceWelcome[2].style.display = 'flex';

function rollDiceWelcome () {

    for ( diceWelcomedisplay of diceWelcomePathArray) {

        diceWelcomedisplay.style.display = 'none';

    };

    diceWelcomeChoice = diceWelcomePathArray[ Math.floor( Math.random() * 6 ) ];
    diceWelcomeChoice.style.display = 'flex';

    diceWelcomeChoice.animate([

        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(360deg)'},

        ], {

        duration: 1000,

    });

};