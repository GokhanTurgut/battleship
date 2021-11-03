import Gameboard from "./gameboardFactory";
function Player(ai) {
    const playerBoard = Gameboard();
    function getPlayerBoard() {
        return playerBoard;
    }
    if (ai) {
        function aiMove(enemyBoard) {
            let result;
            do {
                let xCoord = Math.round(Math.random() * 9);
                let yCoord = Math.round(Math.random() * 9);
                result = enemyBoard.receiveAttack(xCoord, yCoord);
            } while (result === false);
        }
        return { getPlayerBoard, aiMove };
    }
    else
        return { getPlayerBoard };
}
export default Player;
