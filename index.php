<!-- index.php -->
<!-- ECF "Dynamiser vos sites web avec Javascript", Par Pierre BLANCHARD -->
<!-- Référence évaluation : GDWFSDVSWEBAJAVAEXAIII1B_339708_20230516044518 -->

<!DOCTYPE html>
<html lang="fr">

<head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
        crossorigin="anonymous"
    >
    <link rel="stylesheet" href="style/style.css">
    <link rel="shortcut icon" href="images/dice-5.svg">
    <title>StuDICE</title>
    <meta name="description" content="Bienvenue sur StuDICE , jeux de dés en javascript, par BLANCHARD Pierre." >

</head>

<body>

    <header>

        <div class="welcome container-fluid d-flex flex-column justify-content-center align-items-center">

            <?php include './html/title.html'?>
            <?php include './html/diceWelcome.html'?>
            <?php include './html/beginButton.html'?>

        </div>

    </header>

    <main class="main d-flex justify-content-center align-items-center">

        <div class="left"></div>
        <div class="right"></div>

        <div class="placeGame position-absolute container-fluid d-flex flex-column justify-content-evenly align-items-center">

            <?php include './html/newButton.html'?>

            <div class="mainMiddle col-12 d-flex justify-content-evenly align-items-center">

                <?php include './html/placePlayer1.html'?>
                <?php include './html/dice.html'?>
                <?php include './html/placePlayer2.html'?>

            </div>

            <div class="mainBottom container d-flex justify-content-evenly align-items-center">

                <?php include './html/boxRoundScore1.html'?>

                <div class="boxButton d-flex flex-column justify-content-center align-items-center">

                    <?php include './html/rollDiceButton.html'?>
                    <?php include './html/holdButton.html'?>

                </div>

                <?php include './html/boxRoundScore2.html'?>

            </div>

        </div>

    </main>

    <?php include './html/footer.html'?>

    <script src="./js/contants.js"></script>
    <script src="./js/diceWelcomeRoll.js"></script>
    <script src="./js/turnTitle.js"></script>
    <script src="./js/headerMessage.js"></script>
    <script src="./js/variables.js"></script>
    <script src="./js/new.js"></script>
    <script src="./js/roll.js"></script>
    <script src="./js/hold.js"></script>
    <script src="./js/begin.js"></script>
    <script src="./js/switchPlayer.js"></script>
    <script src="./js/endRound.js"></script>

</body>

</html>