var a = Math.ceil(Math.random() * 6);
var b = Math.ceil(Math.random() * 6);

var randomDiceImage = "dice" + a + ".png"

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);


var randomDiceImage2 = "images/dice" + b + ".png"
image2.setAttribute("src", randomDiceImage2);

if (a > b) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}
else if (b > a) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}
else {
    document.querySelector("h1").innerHTML = "Oh no, its a tie!!"
}