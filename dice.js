

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
console.log(randomDiceImage);
var randomImageForDice = "images/" + randomDiceImage;
console.log(randomImageForDice);

var image1 = document.querySelectorAll("img")[0];
console.log(image1);
image1.setAttribute("src", randomImageForDice);
// var image2 = document.querySelector("img")[1];
// image2.setAttribute("src", randomImageForDice);

//for second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageDice2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Congrats player 1 is winner";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Congrats player 2 is winner";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
