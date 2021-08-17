
//First thing lets make the Hint Work!
const hintButton = document.querySelector("#show-hint");

const hint = document.querySelector(".hint")

//add the event listener

hintButton.addEventListener("click", () => {
  hint.classList.toggle("active");
});

const canMove = (tile) => {
  //lets check what is the row and the column
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  //check where is the empty tile
  const emptyColumn = document.querySelector(".empty").cellIndex;
  const emptyRow = document.querySelector(".empty").parentElement.rowIndex;
  return (tileColumn === emptyColumn && tileRow === emptyRow + 1) ||
    (tileColumn === emptyColumn && tileRow === emptyRow - 1) ||
    (tileRow === emptyRow && tileColumn === emptyColumn + 1) ||
    (tileRow === emptyRow && tileColumn === emptyColumn -1);


 // tile column === empty column && tile row === empty row + 1 OR
 // tile column === empty column && tile row === empty row - 1


 // tile row === empty row && tile column == empty column + 1 OR
 // tile row === empty row && tile column == empty column - 1
};

const moveTile = (element) => {
  // 1. select the empty tile
  const empty = document.querySelector(".empty");
  //2 . Replace its content with the element's content
  empty.innerHTML = element.innerHTML;
  // 3 . Remove the .empty class from the previously empty tile
  empty.classList.remove("empty");
  //4. Empty 'element' content
  element.innerHTML = "";
  // 5. Add the empty class on the element
  element.classList.add("empty");
}

const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e =>
    Number.parseInt(e.innerHTML));
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
      alert("You win!");
    }
}

//"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN"

// 1.Select all tiles
const tiles = document.querySelectorAll("td");
// 2. Iterate for each tile
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    if(canMove(event.currentTarget)) {
      // make the tile move
      moveTile(tile);
      checkIfPlayerWins();
    };

  });
});
// 3. Listen to click event
// 4. If it has an empty neighbour
// 5. Swap places with the empty space
// 6. Check if player wins
