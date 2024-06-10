
//Create variables for random numbers (1-6)
var randNum1 = Math.floor(Math.random() * 6) + 1
var randNum2 = Math.floor(Math.random() * 6) + 1

//assign the variables to random images
var randImg1 = "images/dice" + randNum1 + ".png"
var randImg2 = "images/dice" + randNum2 + ".png"

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randImg1)
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randImg2)

//check win condition
if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randNum1 == randNum2) {
    document.querySelector("h1").innerHTML = "Draw!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}