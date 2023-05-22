// new.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Réinitialise les scores, le style et replace le joueur 1 en 'playerGo'

newButton.addEventListener('click', () => {

    rollButton.style.opacity = '100%';
    holdButton.style.opacity = '100%';
    rollButton.style.pointerEvents = 'auto';
    holdButton.style.pointerEvents = 'auto';

    globalScore1 = 0;
    globalScore2 = 0;
    roundScore1 = 0;
    roundScore2 = 0;

    placeRound1.textContent = roundScore1;
    placeRound2.textContent = roundScore2;
    placeGlobal1.textContent = globalScore1;
    placeGlobal2.textContent = globalScore2;

    playerGo = 'player1';
    left.style.backgroundColor = 'whitesmoke';
    backPoint1.style.display = 'block';
    titlePlayer1.style.fontFamily = 'latoLight';
    right.style.backgroundColor = 'white';
    backPoint2.style.display = 'none';
    placeGlobal1.classList.remove('blinking');
    placeGlobal2.classList.remove('blinking');

});