window.onload = () => {
    const app = {
        btnRollDice: document.querySelector('.roll-dice'),
        diceImage: document.querySelector('.dice-img'),
        currentScoreField1: document.querySelector('.player-1 .current-score'),
        playerScore1: document.querySelector('.player-1 .player-score'),
        currentScoreField2: document.querySelector('.player-2 .current-score'),
        playerScore2: document.querySelector('.player-2 .player-score'),
        btnHoldScore: document.querySelector('.hold'),
        playerBox: document.querySelectorAll('.player-box'),
        playerBox1 : document.querySelector('.player-1'),
        playerBox2 : document.querySelector('.player-2'),
        winBox : document.querySelector('.win-box'),
        resetGame : document.querySelector('.start-new')
    }
    let currentScore = 0;
    const score = [0,0];
    let activePlayer = 0;
    const resetGame = function(){
        app.diceImage.classList.add('hidden');
        app.playerScore1.textContent = 0;
        app.playerScore2.textContent = 0;
        app.currentScoreField1.textContent = 0;
        app.currentScoreField2.textContent = 0;
        activePlayer = 0;
    }
    const switchPlayer = function () {
        for(let i = 0; i < app.playerBox.length; i++){
            app.playerBox[i].classList.remove('active');
        }
        score[activePlayer] += currentScore;
        currentPlayer = activePlayer === 0 ? app.playerScore1 : app.playerScore2;
        currentPlayerBox = activePlayer === 0 ? app.playerBox2 : app.playerBox1;
        currentPlayer.textContent =score[activePlayer];
        currentPlayerBox.classList.add('active');
        currentScore = 0;
        return activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
    const getCurrentPlayerScore = function () {
        currentPlayer = activePlayer === 0 ? app.currentScoreField1 : app.currentScoreField2;
        currentPlayer.textContent = currentScore;
    }
    app.btnRollDice.addEventListener('click', function () {
        let diceRoll = Math.trunc(Math.random() * 6) + 1;
        app.diceImage.classList.remove('hidden');
        app.diceImage.src = `dice-${diceRoll}.png`;
        if (diceRoll === 1) {
            currentScore = 0;
            switchPlayer();
        } else {
            currentScore += diceRoll;
            getCurrentPlayerScore();
        }
    });

    app.btnHoldScore.addEventListener('click', function () {
        if (currentScore >= 10) {
            app.winBox.classList.remove('hidden');
            app.winBox.textContent = activePlayer === 0 ? "Player 1 wins" : "Player 2 wins";
            resetGame();
        } else {
            getCurrentPlayerScore();
            switchPlayer();
        }
    });

    app.resetGame.addEventListener('click', resetGame);



















}