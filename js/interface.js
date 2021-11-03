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
function startBtnEvent(playerOneBoard, playerTwoBoard) {
    startBtn.addEventListener("click", () => {
        playerOneNameDisplay.textContent = playerOneName.value;
        placeShipState();
        createBoard(playerOneBoard, playerTwoBoard);
    });
}
function doneBtnEvent(playerOneBoard) {
    donePlacingBtn.addEventListener("click", () => {
        displayShips(playerOneBoard, playerOneCells);
        playerTwoContainer.classList.remove("displayNone");
    });
}
function createBoard(playerOneBoard, playerTwoBoard) {
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        if (playerOneBoard !== "none") {
            cell.addEventListener("click", () => {
                let xCoord = i % 10;
                let yCoord = Math.floor(i / 10);
                playerOneBoard.receiveAttack(xCoord, yCoord);
                displayShips(playerOneBoard.getBoard(), playerOneCells);
            });
        }
        playerOneCells.push(cell);
        playerOneBoardContainer.appendChild(cell);
    }
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        cell.addEventListener("click", () => {
            let xCoord = i % 10;
            let yCoord = Math.floor(i / 10);
            playerTwoBoard.receiveAttack(xCoord, yCoord);
            displayShips(playerTwoBoard.getBoard(), playerTwoCells);
        });
        playerTwoCells.push(cell);
        playerTwoBoardContainer.appendChild(cell);
    }
}
function displayShips(board, playerCellArray) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j].ship !== "none") {
                playerCellArray[i * 10 + j].classList.add("ship");
            }
            else if (board[i][j].hit === true) {
                playerCellArray[i * 10 + j].classList.add("hit");
            }
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
