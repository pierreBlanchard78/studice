// roll.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Définit les conditions de départ du dé.
// Lance le jet de dés au clic sur rollButton, le chiffre aléatoire de 1 a 6 détermine le dé a afficher 
// et l'ajoute aux point du joueur concerné, puis change de joueur. Déclenche silmultanément l'animation du dé

for ( dicedisplay of dicePathArray) {

    dicedisplay.style.display = 'none';

}

dicePathArray[2].style.display = 'flex';

rollButton.addEventListener('click', () => {

    rollDice();

    function rollDice () {

        diceChoice.animate([

            {transform: 'translateX(-5%)'},
            {transform: 'translateX(5%)'},
            {transform: 'translateX(-5%)'},
            {transform: 'translateX(5%)'},
            {transform: 'translateX(0%)'},

            ], {

            duration: 1000,

        });

        setTimeout(() => {

            for ( dicedisplay of dicePathArray) {

                dicedisplay.style.display = 'none';

            }

            diceNumber = Math.floor( Math.random() * 6 );
            diceChoice = dicePathArray[ diceNumber ];
            diceChoice.style.display = 'flex';

            diceChoice.animate([

                {transform: 'rotate(720deg)'}, 
                {transform: 'rotate(0deg)'}, 
                {transform: 'rotate(0deg)'},
                {transform: 'rotate(0deg)'}, 
                {transform: 'rotate(0deg)'}, 
                {transform: 'rotate(720deg)'}

                ], {

                duration: 1000,

            });

            endRound (diceNumber);

        }, 1000);

    }

});