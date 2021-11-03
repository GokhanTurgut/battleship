import Gameboard from "./gameboardFactory";

function Player(ai: boolean) {
  const playerBoard = Gameboard();

  function getPlayerBoard() {
    return playerBoard;
  }
  if (ai) {
    function aiMove(enemyBoard: any) {
      let result: boolean;
      do {
        let xCoord = Math.round(Math.random() * 9);
        let yCoord = Math.round(Math.random() * 9);
        result = enemyBoard.receiveAttack(xCoord, yCoord);
      } while (result === false);
    }
    return { getPlayerBoard, aiMove };
  } else return { getPlayerBoard };
}

export default Player;
