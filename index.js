// Set up variables to track our game state, we use let because we know we need to re-assign them
let currentPlayer = "X";
let clickCounter = 0;
let isGameOver = false;

// set up some constant variables we will need, we use const because we know they won't change
const resetDiv = document.querySelector("#reset");

const winComboArray = [
  [1, 2, 3], // rows
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7], // columns
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9], // diagonals
  [3, 5, 7],
];

// animation properties
const rotationProperties = [
  { transform: "rotate(0) translate3D(-0%, -0%, 0", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-0%, -0%, 0)", color: "#000" },
];

const rotationTiming = {
  duration: 3000,
  iterations: Infinity,
};

function createReset() {
  const resetButtonElement = document.createElement("button");
  resetButtonElement.innerHTML = "Reset";
  resetButtonElement.addEventListener("click", function () {
    window.location.reload();
  });

  resetDiv.appendChild(resetButtonElement);
}

function checkForWin() {
  for (let i = 0; i < winComboArray.length; i++) {
    const currentCombo = winComboArray[i];
    const firstDOMElement = document.querySelector("#box-" + currentCombo[0]);
    const player = firstDOMElement.innerHTML;

    if (!player) {
      // if innerHTML is "", dont check for win and continue to next iteration
      continue;
    }

    const isWinner = currentCombo.every((cellIndex) => {
      return document.querySelector("#box-" + cellIndex).innerHTML === player;
    });

    if (isWinner) {
      updateDOMAfterGameOver(player);
      return; // exit loop early so we don't continue checking for win
    }
  }
}

function updateDOMAfterGameOver(winner) {
  if (winner) {
    setTimeout(function () {
      alert(winner + " Wins!");
    }, 200);
  } else {
    setTimeout(function () {
      alert("Tie game");
    }, 200);
  }
  isGameOver = true;
  createReset();
}

function boxClickHandler(event) {
  if (isGameOver === true || event.target.innerHTML !== "") {
    return;
  }
  event.target.innerHTML = currentPlayer;
  clickCounter++;

  event.target.animate(rotationProperties, rotationTiming);

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  if (clickCounter > 8) {
    updateDOMAfterGameOver();
  } else {
    checkForWin();
  }
}

function initialize() {
  // set up event listeners for all boxes
  for (let i = 1; i <= 9; i++) {
    const currentBox = document.querySelector("#box-" + i);
    currentBox.addEventListener("click", boxClickHandler);
  }
}

initialize();

// We need a way to keep track of whose turn it is
// we need a way to add either an x or o to a box, depending on whose turn it is
// we need a way to check for a win or a draw

// assign an X element to player 1 and assign an O element to player 2
// when we click on a box we need to create an X or an O element
// If box 1 & box 4 & box 7 have an X || box 2 & box 5 & box 8 have an X || box 3 & box 6 & box 9 have an X || box 1 & box 5 & box 9 have an X || box 3 & box 5 & box 7 have an X, return "Player 1 won!"
// If box 1 & box 4 & box 7 have an O || box 2 & box 5 & box 8 have an O || box 3 & box 6 & box 9 have an O || box 1 & box 5 & box 9 have an O || box 3 & box 5 & box 7 have an O, return "Player 2 won!"
// else, return "It was a draw! Try Again"
