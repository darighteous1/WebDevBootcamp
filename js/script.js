var movies = [
    { title: "In Bruges", hasWatched: false, rating: 4 },
    { title: "La La Land", hasWatched: true, rating: 4.5 },
    { title: "Ice Age", hasWatched: true, rating: 5}
];

movies.forEach(function (movie) {
    console.log(buildString(movie));
});

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }

    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars";
    return result;
}

Array.prototype.each = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var colors = ["red", "orange", "yellow", "tomato"];

// colors.each(function(color){
//     console.log(color + " is cool");
// });

// myForeach(colors, function(color){
//     alert(color);
// });
function myForeach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function annoyotron() {
    var question = "Are we there yet?";
    var answer = prompt(question);

    while (answer.indexOf("yes") === -1) {
        answer = prompt(question);
    }

    alert("YAY, WE MADE IT!!!");
}

function printSomeNumbers() {
    console.log("Printing all numbers between -10 and 19:");
    var num = -10;
    while (num <= 19) {
        console.log(num);
        num++;
    }

    console.log("Printing all even numbers between 10 and 40:");
    num = 10
    while (num <= 40) {
        console.log(num);
        num += 2;
    }

    console.log("Printing all odd numbers between 300 and 333:");
    num = 300;
    while (num <= 333) {
        if (num % 2 !== 0) {
            console.log(num);
        }

        num++;
    }

    console.log("Printing all numbers between 5 and 50 that are divisible by 5 and 3 at the same time:");
    num = 5;
    while (num <= 50) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log(num);
        }

        num++;
    }
}