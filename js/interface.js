const playerOneName = document.getElementById("playerOneName");
const playerOneNameDisplay = document.getElementById("playerOneNameDisplay");
const playerTwoNameDisplay = document.getElementById("playerTwoNameDisplay");
const playerOneBoard = document.getElementById("playerOneBoard");
const playerTwoBoard = document.getElementById("playerTwoBoard");
const startBtn = document.getElementById("startBtn");
const donePlacingBtn = document.getElementById("donePlacingBtn");
function eventListeners() {
    startBtn.addEventListener("click", () => {
        playerOneNameDisplay.textContent = playerOneName.value;
    });
}
function createBoard() {
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement("div");
    }
}
export default eventListeners;
