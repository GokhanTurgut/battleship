import Gameboard from "./gameboardFactory";
function Player(name, ai) {
    const playerBoard = Gameboard();
    function getName() {
        return name;
    }
    function getBoard() {
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
        return { getName, getBoard, aiMove };
    }
    else
        return { getName, getBoard };
}
export default Player;
