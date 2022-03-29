let currentPlayer = "X"
let clickCounter = 0
let isGameOver = false
let resetDiv = document.querySelector("#reset")
let resetButtonElement = document.createElement("button")
resetButtonElement.innerHTML = "Reset"
resetButtonElement.addEventListener("click", function () {
  window.location.reload()
})
function checkForWin() {
  let box1 = document.querySelector("#box-1").innerHTML
  let box2 = document.querySelector("#box-2").innerHTML
  let box3 = document.querySelector("#box-3").innerHTML
  let box4 = document.querySelector("#box-4").innerHTML
  let box5 = document.querySelector("#box-5").innerHTML
  let box6 = document.querySelector("#box-6").innerHTML
  let box7 = document.querySelector("#box-7").innerHTML
  let box8 = document.querySelector("#box-8").innerHTML
  let box9 = document.querySelector("#box-9").innerHTML

  if ((box1 === "X" && box4 === "X" && box7 === "X") || 
  (box2 === "X" && box5 === "X" && box8 === "X") || 
  (box3 === "X" && box6 === "X" && box9 === "X") || 
  (box1 === "X" && box5 === "X" && box9 === "X") || 
  (box3 === "X" && box5 === "X" && box7 === "X") ||
  (box1 === "X" && box2 === "X" && box3 === "X") ||
  (box4 === "X" && box5 === "X" && box6 === "X") ||
  (box7 === "X" && box8 === "X" && box9 === "X")) {
    setTimeout(function () { alert("X Wins!")}, 200);
    isGameOver = true
    resetDiv.appendChild(resetButtonElement)
  } if ((box1 === "O" && box4 === "O" && box7 === "O") || 
  (box2 === "O" && box5 === "O" && box8 === "O") || 
  (box3 === "O" && box6 === "O" && box9 === "O") || 
  (box1 === "O" && box5 === "O" && box9 === "O") || 
  (box3 === "O" && box5 === "O" && box7 === "O") ||
  (box1 === "O" && box2 === "O" && box3 === "O") ||
  (box4 === "O" && box5 === "O" && box6 === "O") ||
  (box7 === "O" && box8 === "O" && box9 === "O")) {
    setTimeout(function () { alert("O Wins!")}, 200);
    isGameOver = true
    resetDiv.appendChild(resetButtonElement)
  } else if (clickCounter > 8) {
    setTimeout(function () { alert("It was a draw! Try again.")}, 200);
    isGameOver = true
    resetDiv.appendChild(resetButtonElement)
  }
  //console.log(box1.innerHTML)
}

function boxClickHandler(event) {
  if (isGameOver === true) {
    return
  }
  if (event.target.innerHTML !== "") {
    return
  }
  event.target.innerHTML = currentPlayer
  clickCounter++
  if (currentPlayer === "X") {
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
  checkForWin()
  //console.log(event.target);
}

// set up event listeners for all boxes
for (let i = 1; i <= 9; i++) {
  const currentBox = document.querySelector("#box-" + i);
  currentBox.addEventListener("click", boxClickHandler);
}
// We need a way to keep track of whose turn it is
// we need a way to add either an x or o to a box, depending on whose turn it is
// we need a way to check for a win or a draw

// assign an X element to player 1 and assign an O element to player 2
// when we click on a box we need to create an X or an O element
// If box 1 & box 4 & box 7 have an X || box 2 & box 5 & box 8 have an X || box 3 & box 6 & box 9 have an X || box 1 & box 5 & box 9 have an X || box 3 & box 5 & box 7 have an X, return "Player 1 won!"
// If box 1 & box 4 & box 7 have an O || box 2 & box 5 & box 8 have an O || box 3 & box 6 & box 9 have an O || box 1 & box 5 & box 9 have an O || box 3 & box 5 & box 7 have an O, return "Player 2 won!"
// else, return "It was a draw! Try Again"