var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneScoreDisplay = document.getElementById("player-one-score-display");
var playerTwoScoreDisplay = document.getElementById("player-two-score-display");

var maxScoreDisplay = document.getElementById("max-score");
var maxScoreInput = document.querySelector("input");
var maxScore = Number(maxScoreDisplay.textContent);

var incrementPlayerOneScore = document.getElementById("add-player-one");
var incrementPlayerTwoScore = document.getElementById("add-player-two");

var resetButton = document.getElementById("reset");
var gameOver = false;

maxScoreInput.addEventListener("change", function(){
    maxScore = Number(this.value);
    maxScoreDisplay.textContent = maxScore;
    reset();
});

incrementPlayerOneScore.addEventListener("click", function(){
    if (! gameOver) {
        playerOneScore++;
        playerOneScoreDisplay.textContent = playerOneScore;
    }
    
    if (playerOneScore >= maxScore) {
        // max score reached, Player One wins
        gameOver = true;
        playerOneScoreDisplay.classList.add("winner");
    }
});

incrementPlayerTwoScore.addEventListener("click", function(){
    if (! gameOver) {
        playerTwoScore++;
        playerTwoScoreDisplay.textContent = playerTwoScore;
    }

    if (playerTwoScore >= maxScore) {
        // max score reached, Player Two wins
        gameOver = true;
        playerTwoScoreDisplay.classList.add("winner");
    }
});

resetButton.addEventListener("click", reset);

function reset() {
     // reset the score
     playerOneScore = playerTwoScore = 0;
     playerOneScoreDisplay.textContent = playerTwoScoreDisplay.textContent = playerOneScore;
     
     // reset the game
     gameOver = false;
 
     // reset color
     playerOneScoreDisplay.classList.remove("winner");
     playerTwoScoreDisplay.classList.remove("winner");
}