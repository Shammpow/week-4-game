var compChoice = Math.floor(Math.random() * 102) + 19

<<<<<<< HEAD
console.log(compChoice);

var points = 0


function crystalValue() {
    var userChoice = Math.floor(Math.random() * 12) + 1
    console.log(userChoice);
}

$(".crystal-image").on("click", function() {
    console.log("you clicked a crystal!");
    crystalValue();
    points++;
})
=======
console.log(compChoice)

var points = 0;
var wins = 0;
var losses = 0;
document.getElementById("hitscore").innerHTML = compChoice;
document.getElementById("wincount").innerHTML = wins;
document.getElementById("losscount").innerHTML = losses;
function reset() {
    points = 0;
    var compChoice = Math.floor(Math.random() * 102) + 19
}
$(".crystal-image").on("click", function () {
    console.log("crystal clicked");
    points += Math.floor(Math.random() * 12) + 1
    document.getElementById("myscore").innerHTML = points;
    console.log(points);
    if (points === compChoice) {
        wins++;
        reset();
    }
    else if (points > compChoice) {
        losses++;
        reset();
    }
})

>>>>>>> origin/master
