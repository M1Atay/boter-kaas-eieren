console.log("js loaded");

let playfieldArray = [//niks staat op speelveld alles is false
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const myBtn = document.querySelector(".resetName");//reset naam button
myBtn.addEventListener("click", myFunction);
const myBtn2 = document.querySelector(".resetBoard");//reset bord button
myBtn.addEventListener("click", myFunction);

const playerOneLabel = document.querySelector(".player1");//player 1 naam veranderen
const playerTwoLabel = document.querySelector(".player2");//player 2 naam veranderen

const resetButton = document.querySelector(".resetBoard"); //A button to reset the game
resetButton.addEventListener("click", resetBoard); // Add an event listener to the reset button

let player1Symbol = `X`; //symbool player 1
let player2Symbol = `O`; // symbol player 2
let playerOneName = "";//naam veranderen player 1
let playerTwoName = "";//naam veranderen player 2
currentPlayer = "X";//gespeelde speler

let playerTurn = 1; // veranderd wie speeld
let gameEnded = false; //alles wordt false als je reset klikt

const winningMessageElement = document.getElementsByClassName("winningmessage");

// Haal met queryselectorAll alle div's met de class 'box'
// op en stop die in een variable

const fields = document.querySelectorAll(".box");
console.log("fields: " + fields.length);

// loop nu door fields en zet in elke div een X

for (let i = 0; i < fields.length; i++) {
  const field = fields[i];

  console.log(field);
  field.textContent = ""; //i + 1;
  field.addEventListener("click", function () {
    boxClicked(i);
  });
  checkWinner();
}
function checkWinner(currentPlayer) {
  let winningConditions = [
    [0, 1, 2], // First horizontal row

    [3, 4, 5], // Second horizontal row

    [6, 7, 8], // Third horizontal row

    [0, 3, 6], // First vertical row

    [1, 4, 7], // Second vertical row

    [2, 5, 8], // Third vertical row

    [0, 4, 8], // First diagonal row

    [2, 4, 6], // Second diagonal row
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    let matchCounter = 0;

    const firstSymbol = fields[winningConditions[i][0]].textContent;

    const array = winningConditions[i]; //win mogelijkheden

    //n is number

    let nOne = array[0]; //rij 1

    let nTwo = array[1]; //rij 2

    let nThree = array[2]; //rij 3

    if (
      playfieldArray[nOne] == currentPlayer &&//currentplayer kijken voor drie naast elkaar
      playfieldArray[nTwo] == currentPlayer &&//== betekend gelijk aan
      playfieldArray[nThree] == currentPlayer
    ) {
      alert(currentPlayer + " wint!"); //als er 3 zelfde symbolen naast elkaar zijn win

      gameEnded = true;//3 true naast elkaar
    }
  }
}

function boxClicked(index) {
  // alert("Geklikt op vakje " + index);
  const field = fields[index];
  if (gameEnded == false) {
    if (playerTurn == 1 && playfieldArray[index] == false) {
      currentPlayer = "X"; //met nu gespeelde speler
      playerTurn = 2; //gaat naar de volgende speler
      playfieldArray[index] = `X`; //gespeelde symbol
      field.textContent = currentPlayer; //speelveld boter kaas en eieren
      checkWinner(`X`); //check of player 1 heeft gewonnen
    } else if (playerTurn == 2 && playfieldArray[index] == false) {
      currentPlayer = "O"; //met nu gespeelde spelr
      playerTurn = 1; //terug naar speler 1
      playfieldArray[index] = `O`; //gespeelde symbol
      field.textContent = currentPlayer; //speeelveld waar het wordt gespeeld
      checkWinner(`O`); //check of player 2 heeft gewonnen
    }

    console.log(playfieldArray); //zet de speelveld in array in console
  }
}

function myFunction() {
  playerOneName = prompt(" In wat wil je Speler 1 naam veranderen?");
  playerOneLabel.innerHTML = "Player 1:" + playerOneName + "<br>"; //veranderd de  naam speler 1
  playerOneLabel.innerHTML += "Symbol:" + player1Symbol;

  playerTwoName = prompt("In wat wil je Speler 2 naam veranderen?");
  playerTwoLabel.innerHTML = "Player 2:" + playerTwoName + "<br>"; //veranderd de  naam speler 2
  playerTwoLabel.innerHTML += "Symbol:" + player2Symbol;
}
function resetBoard() {
  gameEnded = false;//maakt alles false array
  // Reset tiles
  for (let i = 0; i < playfieldArray.length; i++) {
    let tile = fields[i];
    tile.innerHTML = "";
  }

  currentPlayer = "X"; // Start with X
  playfieldArray = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]; //alles wordt false bord
}
