// headerMessage.js
// ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD
// Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518

// Affiche dans le header le contenu de la chaine un caractère après l'autre 

function headerMessageInterval() {

    iMessage++;
    subTitle.textContent += headerMessage[0][iMessage];

    if ( iMessage === headerMessage[0].length - 1 ) {

        clearInterval(headerMessageIntervalVar);
        
    };

};