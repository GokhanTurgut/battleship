const welcomeMassage = document.getElementById("welcomeMassage")!;
const playerOneName = <HTMLInputElement>(
  document.getElementById("playerOneName")!
);
const placeShipMassage = document.getElementById("placeShipMassage")!;
const playerOneContainer = document.getElementById("playerOneContainer")!;
const playerTwoContainer = document.getElementById("playerTwoContainer")!;
const playerOneNameDisplay = document.getElementById("playerOneNameDisplay")!;
const playerTwoNameDisplay = document.getElementById("playerTwoNameDisplay")!;
const playerOneBoardContainer = document.getElementById("playerOneBoard")!;
const playerTwoBoardContainer = document.getElementById("playerTwoBoard")!;
const gameOverModal = document.getElementById("gameOverModal")!;
const gameOverMassage = document.getElementById("gameOverMassage")!;
const startBtn = document.getElementById("startBtn")!;
const donePlacingBtn = document.getElementById("donePlacingBtn")!;
const rotateBtn = document.getElementById("rotateBtn")!;

const playerOneCells: HTMLElement[] = [];
const playerTwoCells: HTMLElement[] = [];

let horizontal = true;
let shipSize = 5;

function startBtnEvent(player: any) {
  startBtn.addEventListener("click", () => {
    playerOneNameDisplay.textContent = playerOneName.value;
    placeShipState();
    createBoards();
    placeShipEventAdder(player);
    rotateBtnEvent();
  });
}

function doneBtnEvent(computer: any, player: any) {
  donePlacingBtn.addEventListener("click", () => {
    if (shipSize === 0) {
      computerGameplayState();
      displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);
      playerTwoContainer.classList.remove("displayNone");
      computerCellEventAdder(computer, player);
    }
  });
}

function createBoards() {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("boardCell");
    playerOneCells.push(cell);
    playerOneBoardContainer.appendChild(cell);
  }
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("boardCell");
    playerTwoCells.push(cell);
    playerTwoBoardContainer.appendChild(cell);
  }
}

function displayShips(board: any[], playerCellArray: any[], showShip: boolean) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j].ship !== "none" && showShip === true) {
        playerCellArray[i * 10 + j].classList.add("ship");
      }
      if (board[i][j].ship !== "none" && board[i][j].hit === true) {
        playerCellArray[i * 10 + j].classList.add("damage");
      }
      if (board[i][j].ship === "none" && board[i][j].hit === true) {
        playerCellArray[i * 10 + j].classList.add("hit");
      }
    }
  }
}

function computerCellEventAdder(computer: any, player: any) {
  for (let i = 0; i < playerTwoCells.length; i++) {
    let xCoord = i % 10;
    let yCoord = Math.floor(i / 10);
    function cellEventRemover(cellsArray: HTMLElement[]) {
      cellsArray.forEach((cell) => {
        cell.removeEventListener("click", cellEvent);
      });
    }
    function cellEvent() {
      computer.getPlayerBoard().receiveAttack(xCoord, yCoord);
      displayShips(computer.getPlayerBoard().getBoard(), playerTwoCells, false);
      computer.aiMove(player.getPlayerBoard());
      displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);
      cellEventRemover(playerTwoCells);
      if (computer.getPlayerBoard().gameOver()) {
        gameOverModal.classList.remove("displayNone");
        gameOverMassage.textContent = "Player wins!";
      }
      if (player.getPlayerBoard().gameOver()) {
        gameOverModal.classList.remove("displayNone");
        gameOverMassage.textContent = "Computer wins!";
      }
    }
    if (computer.getPlayerBoard().getBoard()[yCoord][xCoord].hit === false) {
      playerTwoCells[i].addEventListener("click", cellEvent);
    }
  }
}

function placeShipEventAdder(player: any) {
  playerOneCells.forEach((cell, index) => {
    cell.addEventListener("mousemove", function hoverState() {
      for (let i = 0; i < shipSize; i++) {
        if (horizontal === true && index % 10 < 11 - shipSize) {
          playerOneCells[index + i].classList.add("hovering");
        }
        if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {
          playerOneCells[index + i * 10].classList.add("hovering");
        }
      }
    });
    cell.addEventListener("mouseout", function hoverOverState() {
      for (let i = 0; i < shipSize + 1; i++) {
        if (horizontal === true && index % 10 < 11 - shipSize) {
          playerOneCells[index + i].classList.remove("hovering");
        }
        if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {
          playerOneCells[index + i * 10].classList.remove("hovering");
        }
      }
    });
    cell.addEventListener("click", function clickPlaceShip() {
      if (horizontal === true && index % 10 < 11 - shipSize) {
        let xCoord = index % 10;
        let yCoord = Math.floor(index / 10);
        if (
          player
            .getPlayerBoard()
            .placeShip(shipSize, xCoord, yCoord, horizontal)
        ) {
          displayShips(
            player.getPlayerBoard().getBoard(),
            playerOneCells,
            true
          );
          shipSize--;
        }
      }
      if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {
        let xCoord = index % 10;
        let yCoord = Math.floor(index / 10);
        if (
          player
            .getPlayerBoard()
            .placeShip(shipSize, xCoord, yCoord, horizontal)
        ) {
          displayShips(
            player.getPlayerBoard().getBoard(),
            playerOneCells,
            true
          );
          shipSize--;
        }
      }
    });
  });
}

function rotateBtnEvent() {
  rotateBtn.classList.remove("displayNone");
  rotateBtn.addEventListener("click", () => {
    if (horizontal) {
      horizontal = false;
    } else {
      horizontal = true;
    }
  });
}

function placeShipState() {
  welcomeMassage.classList.add("displayNone");
  playerOneName.classList.add("displayNone");
  startBtn.classList.add("displayNone");
  placeShipMassage.classList.remove("displayNone");
  playerOneContainer.classList.remove("displayNone");
  donePlacingBtn.classList.remove("displayNone");
}

function computerGameplayState() {
  placeShipMassage.classList.add("displayNone");
  playerTwoNameDisplay.textContent = "Computer";
  rotateBtn.classList.add("displayNone");
}

export { startBtnEvent, doneBtnEvent };
