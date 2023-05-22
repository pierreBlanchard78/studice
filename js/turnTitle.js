// turnTitle.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Logique d'animation du titre

function turnLetter () {

    titleLetters[letterIndice].style.transform = 'rotateY(0deg)';
    titleLetters[letterIndice].style.color = 'red';
    letterIndice++;

    if ( letterIndice === 7 ) {

        clearInterval(intervalTitleTurn);
        
    }
    
};




