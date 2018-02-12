var compChoice = Math.floor(Math.random() * 102) + 19

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
