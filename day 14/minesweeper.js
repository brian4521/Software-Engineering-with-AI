var board = [];
var rows = 8;
var columns = 8;

var mineCount = 5;
var mineLocation = [];

var tileClicked = 0;

var flagEnabled = false;
var gameOver = false;

window.onload = function () {
  startGame();
};

function setMines() {

  let minesRandom = mineCount;

  while (minesRandom > 0) {

    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);

    let id = r.toString() + "-" + c.toString();

    if (!mineLocation.includes(id)) {
      mineLocation.push(id);
      minesRandom -= 1;
    }
  }
}

function startGame() {

  document.getElementById("mines-count").innerText = mineCount;

  document
    .getElementById("flag-button")
    .addEventListener("click", setFlag);

  setMines();

  for (let r = 0; r < rows; r++) {

    let row = [];

    for (let c = 0; c < columns; c++) {

      let tile = document.createElement("div");

      tile.id = r.toString() + "-" + c.toString();

      tile.addEventListener("click", clickTile);

      document.getElementById("grid-board").append(tile);

      row.push(tile);
    }

    board.push(row);
  }

  console.log(board);
}

function setFlag() {

  if (flagEnabled) {

    flagEnabled = false;

    document.getElementById("flag-button").style.backgroundColor =
      "lightgray";

  } else {

    flagEnabled = true;

    document.getElementById("flag-button").style.backgroundColor =
      "darkgray";
  }
}

function clickTile() {

  if (gameOver || this.classList.contains("box-click")) {
    return;
  }

  let tile = this;

  if (flagEnabled) {

    if (tile.innerText == "") {

      tile.innerText = "🚩";

    } else if (tile.innerText == "🚩") {

      tile.innerText = "";
    }

    return;
  }

  if (mineLocation.includes(tile.id)) {

    gameOver = true;

    exposeMines();

    return;
  }

  let cords = tile.id.split("-");

  let r = parseInt(cords[0]);
  let c = parseInt(cords[1]);

  checkMine(r, c);
}

function exposeMines() {

  for (let r = 0; r < rows; r++) {

    for (let c = 0; c < columns; c++) {

      let tile = board[r][c];

      if (mineLocation.includes(tile.id)) {

        tile.innerText = "💣";

        tile.style.backgroundColor = "red";
      }
    }
  }
}

function checkMine(r, c) {

  if (
    r < 0 ||
    r >= rows ||
    c < 0 ||
    c >= columns
  ) {
    return;
  }

  if (board[r][c].classList.contains("box-click")) {
    return;
  }

  board[r][c].classList.add("box-click");

  tileClicked += 1;

  let minesFound = 0;

  // Top
  minesFound += checkTile(r - 1, c - 1);
  minesFound += checkTile(r - 1, c);
  minesFound += checkTile(r - 1, c + 1);

  // Left and Right
  minesFound += checkTile(r, c - 1);
  minesFound += checkTile(r, c + 1);

  // Bottom
  minesFound += checkTile(r + 1, c - 1);
  minesFound += checkTile(r + 1, c);
  minesFound += checkTile(r + 1, c + 1);

  if (minesFound > 0) {

    board[r][c].innerText = minesFound;

    board[r][c].classList.add(
      "x" + minesFound.toString()
    );

  } else {

    // Top
    checkMine(r - 1, c - 1);
    checkMine(r - 1, c);
    checkMine(r - 1, c + 1);

    // Left and Right
    checkMine(r, c - 1);
    checkMine(r, c + 1);

    // Bottom
    checkMine(r + 1, c - 1);
    checkMine(r + 1, c);
    checkMine(r + 1, c + 1);
  }

  if (tileClicked == rows * columns - mineCount) {

    document.getElementById("mines-count").innerText =
      "cleared";

    gameOver = true;
  }
}

function checkTile(r, c) {

  if (
    r < 0 ||
    r >= rows ||
    c < 0 ||
    c >= columns
  ) {
    return 0;
  }

  if (
    mineLocation.includes(
      r.toString() + "-" + c.toString()
    )
  ) {
    return 1;
  }

  return 0;
}