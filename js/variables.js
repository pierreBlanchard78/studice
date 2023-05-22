// variables.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Ce script contient les variables nécessaires a l'application

// globals scores
let globalScore1 = 0;
let globalScore2 = 0;
// rounds scores
let roundScore1 = 0;
let roundScore2 = 0;
// actual player
let playerGo = 'player1';
// diceWelcomeRoll
let intervalRoll = setInterval(rollDiceWelcome, 3000);
// turnTitle
let letterIndice = 0;
let intervalTitleTurn = setInterval(turnLetter, 200);
// header message
let iMessage = 0;
let headerMessageIntervalVar = setInterval(headerMessageInterval,100);
// dice
let diceChoice = dicePathArray[2];