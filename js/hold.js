// hold.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Transfère les points 'round' a 'global' et change de joueur, si round n'est pas egal a 0

holdButton.addEventListener('click', () => {

    if ( playerGo === 'player1' ) {

        if ( roundScore1 !== 0 ) {

            globalScore1 += roundScore1;
            placeGlobal1.textContent = globalScore1;
            roundScore1 = 0;
            placeRound1.textContent = roundScore1;

            switchPlayer('player1');

        }

    } else if ( playerGo === 'player2' ) {

        if ( roundScore2 !== 0 ) {

            globalScore2 += roundScore2;
            placeGlobal2.textContent = globalScore2;
            roundScore2 = 0;
            placeRound2.textContent = roundScore2;

            switchPlayer('player2');

        }

    };

    if ( globalScore1 >= 100) {

        left.style.backgroundColor = 'lightcoral';
        rollButton.style.opacity = '50%';
        holdButton.style.opacity = '50%';
        rollButton.style.pointerEvents = 'none';
        holdButton.style.pointerEvents = 'none';
        placeGlobal1.textContent = 'WIN !';
        placeGlobal1.classList.add('blinking');

    };
    
    if ( globalScore2 >= 100) {

        right.style.backgroundColor = 'lightcoral';
        rollButton.style.opacity = '50%';
        holdButton.style.opacity = '50%';
        rollButton.style.pointerEvents = 'none';
        holdButton.style.pointerEvents = 'none';
        placeGlobal2.textContent = 'WIN !';
        placeGlobal2.classList.add('blinking');

    }

});