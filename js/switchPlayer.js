// switchPlayer.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Echange le joueur courant; Le style et la variable de désignation.

function switchPlayer (playerGoFunc) {

    if ( playerGoFunc === 'player1' ) {
        
        left.style.backgroundColor = 'white';
        backPoint1.style.display = 'none';
        titlePlayer1.style.fontFamily = 'latoThin';
        right.style.backgroundColor = 'whitesmoke';
        backPoint2.style.display = 'block';
        titlePlayer2.style.fontFamily = 'latoLight';
        playerGo = 'player2';

    } else if ( playerGoFunc === 'player2' ) {

        left.style.backgroundColor = 'whitesmoke';
        backPoint1.style.display = 'block';
        titlePlayer1.style.fontFamily = 'latoLight';
        right.style.backgroundColor = 'white';
        backPoint2.style.display = 'none';
        titlePlayer2.style.fontFamily = 'latoThin';
        playerGo = 'player1';

    }

};