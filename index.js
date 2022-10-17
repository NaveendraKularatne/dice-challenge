var randomNumOne = Math.random();
var randomNumTwo = Math.random();
randomNumOne = Math.floor (randomNumOne*6) + 1;
randomNumTwo = Math.floor (randomNumTwo*6) + 1;

//Another way / more productive way
var randomDiceImage = "dice" + randomNumOne + ".png"; //dice1.png - dice2.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice2.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomImageSource2 = "images/dice" + randomNumTwo + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

if (randomNumOne > randomNumTwo) {
	//player one wins
	document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} 
if (randomNumOne < randomNumTwo) {
	// Player two wins
	document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
if ( randomNumOne === randomNumTwo) {
	// draw
	document.querySelector("h1").innerHTML = "Draw!";
}

/*if (randomNumOne === 1) {
	document.getElementById('img1').src='images/dice1.png';
} else if (randomNumOne === 2) {
	document.getElementById('img1').src='images/dice2.png';
} else if (randomNumOne === 3) {
	document.getElementById('img1').src='images/dice3.png';
} else if (randomNumOne === 4) {
	document.getElementById('img1').src='images/dice4.png';
} else if (randomNumOne === 5) {
	document.getElementById('img1').src='images/dice5.png';
} else if (randomNumOne === 6) {
	document.getElementById('img1').src='images/dice6.png';
}

if (randomNumTwo === 1) {
	document.getElementById('img2').src='images/dice1.png';
} else if (randomNumTwo === 2) {
	document.getElementById('img2').src='images/dice2.png';
} else if (randomNumTwo === 3) {
	document.getElementById('img2').src='images/dice3.png';
} else if (randomNumTwo === 4) {
	document.getElementById('img2').src='images/dice4.png';
} else if (randomNumTwo === 5) {
	document.getElementById('img2').src='images/dice5.png';
} else if (randomNumTwo === 6) {
	document.getElementById('img2').src='images/dice6.png';
}*/