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