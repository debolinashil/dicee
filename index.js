
document.querySelector(".container").innerHTML="Refresh Me";
document.querySelector(".player1").setAttribute("src","images/dice6.png");
document.querySelector(".player2").setAttribute("src","images/dice6.png");

var randomNum1 = Math.random(); //generate random number for player1(0-0.999999)
var randomNum2 = Math.random(); //generate random number for player2(0-0.999999)

randomNum1 = Math.floor((randomNum1*6)+1);  //convert the random number to 1-6 for player1

randomNum2 = Math.floor((randomNum2*6)+1); //convert the random number to 1-6 for player2

var randomImage1 = "images/dice" + randomNum1 + ".png";
document.querySelector(".player1").setAttribute("src",randomImage1);



var randomImage2 = "images/dice" + randomNum2 + ".png";
document.querySelector(".player2").setAttribute("src",randomImage2);

// For Player1 change dices

/*
if (randomNum1==1){
    document.querySelector(".player1").setAttribute("src","images/dice1.png");
}

else if (randomNum1==2){
    document.querySelector(".player1").setAttribute("src","images/dice2.png");
}

else if (randomNum1==3){
    document.querySelector(".player1").setAttribute("src","images/dice3.png");
}

else if (randomNum1==4){
    document.querySelector(".player1").setAttribute("src","images/dice4.png");
}

else if (randomNum1==5){
    document.querySelector(".player1").setAttribute("src","images/dice5.png");
}

else {
    document.querySelector(".player1").setAttribute("src","images/dice6.png");
}




// For Player2 change dices

if (randomNum2==1){
    document.querySelector(".player2").setAttribute("src","images/dice1.png");
}

else if (randomNum2==2){
    document.querySelector(".player2").setAttribute("src","images/dice2.png");
}

else if (randomNum2==3){
    document.querySelector(".player2").setAttribute("src","images/dice3.png");
}

else if (randomNum2==4){
    document.querySelector(".player2").setAttribute("src","images/dice4.png");
}

else if (randomNum2==5){
    document.querySelector(".player2").setAttribute("src","images/dice5.png");
}

else {
    document.querySelector(".player2").setAttribute("src","images/dice6.png");
}

*/

//Choose a winner

if(randomNum1==randomNum2){
    document.querySelector("h1").innerHTML="Draw!!";
    document.querySelector("h1").style.fontSize="6rem";
}
else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins the game";
    document.querySelector("h1").style.fontSize="6rem";
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins the game 🚩";
    document.querySelector("h1").style.fontSize="6rem";
}
