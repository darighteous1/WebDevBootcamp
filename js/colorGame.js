var numberOfSquares = 6;
var colors = [];
var pickedColor;

var bodyColor = document.querySelector("body").style.backgroundColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            numberOfSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                heading.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = bodyColor;
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick new random color
    pickedColor = pickColor();
    // change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change the colors of the squares
    heading.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }

}

resetButton.addEventListener("click", reset);


function changeColors(color) {
    // loop through all squares
    squares.forEach(function (square) {
        // change each color to match given color
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    // make an array
    var randomColors = [];
    // repeat 'number' times
    for (var i = 0; i < number; i++) {
        // get random color and push into array
        randomColors.push(randomColor());
    }

    // return that array
    return randomColors;
}

function randomColor() {
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}