function boxClickHandler(event) {
  console.log(event.target);
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