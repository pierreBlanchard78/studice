// endRound.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Met a jour la variable roundScore et l'affiche a son emplacement, puis change de joueur

function endRound (diceNumber) {

    setTimeout(() => {

        if ( playerGo === 'player1' ) {

            roundScore1 += diceNumber + 1;
            placeRound1.textContent = roundScore1;

            switchPlayer('player1');
            
        } else if ( playerGo === 'player2' ) {

            roundScore2 += diceNumber + 1;
            placeRound2.textContent = roundScore2;

            switchPlayer('player2');

        }

    }, 1000);

};