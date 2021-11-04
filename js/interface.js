const playerOneName = (document.getElementById("playerOneName"));
const placeShipMassage = document.getElementById("placeShipMassage");
const playerOneContainer = document.getElementById("playerOneContainer");
const playerTwoContainer = document.getElementById("playerTwoContainer");
const playerOneNameDisplay = document.getElementById("playerOneNameDisplay");
const playerTwoNameDisplay = document.getElementById("playerTwoNameDisplay");
const playerOneBoardContainer = document.getElementById("playerOneBoard");
const playerTwoBoardContainer = document.getElementById("playerTwoBoard");
const startBtn = document.getElementById("startBtn");
const donePlacingBtn = document.getElementById("donePlacingBtn");
const playerOneCells = [];
const playerTwoCells = [];
function startBtnEvent() {
    startBtn.addEventListener("click", () => {
        playerOneNameDisplay.textContent = playerOneName.value;
        placeShipState();
        createBoards();
    });
}
function doneBtnEvent(computer, player) {
    donePlacingBtn.addEventListener("click", () => {
        displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);
        playerTwoContainer.classList.remove("displayNone");
        computerCellEventAdder(computer, player);
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
function displayShips(board, playerCellArray, showShip) {
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
function computerCellEventAdder(computer, player) {
    for (let i = 0; i < playerTwoCells.length; i++) {
        let xCoord = i % 10;
        let yCoord = Math.floor(i / 10);
        function cellEventRemover(cellsArray) {
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
        }
        if (computer.getPlayerBoard().getBoard()[yCoord][xCoord].hit === false) {
            playerTwoCells[i].addEventListener("click", cellEvent);
        }
    }
}
function placeShipState() {
    playerOneName.classList.add("displayNone");
    startBtn.classList.add("displayNone");
    placeShipMassage.classList.remove("displayNone");
    playerOneContainer.classList.remove("displayNone");
    donePlacingBtn.classList.remove("displayNone");
}
export { startBtnEvent, doneBtnEvent };
