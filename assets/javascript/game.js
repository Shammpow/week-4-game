var compChoice = Math.floor(Math.random() * 102) + 19
console.log(compChoice)
var points = 0;
var wins = 0;
var losses = 0;
function winsIncrease() {
    wins++;
    document.getElementById("wincount").innerHTML = wins;
}

function lossIncrease() {
    losses++;
    document.getElementById("losscount").innerHTML = losses;
}
function crystalClick() {
    points += Math.floor(Math.random() * 12) + 1;
    console.log(points)
}

function reset() {
    points = 0;
    compChoice = Math.floor(Math.random() * 102) + 19;
}
$(".crystal-image").on("click", function () {
    crystalClick();
    document.getElementById("myscore").innerHTML = points;
    document.getElementById("hitscore").innerHTML = compChoice;
    if (points === compChoice) {
        winsIncrease();
        reset();
    }
    else if (points > compChoice) {
        lossIncrease();
        reset();
    }
})

