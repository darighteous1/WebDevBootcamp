var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var p1ScoreDisplay = document.querySelector("#playerOneScore");
var p2ScoreDisplay = document.querySelector("#playerTwoScore");

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
    p1Score++;
    p1ScoreDisplay.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
    p2Score++;
    p2ScoreDisplay.textContent = p2Score;
});