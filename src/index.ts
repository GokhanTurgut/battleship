import { startBtnEvent, doneBtnEvent } from "./interface";
import Player from "./playerFactory";

const playerOne = Player(false);
const computer = Player(true);

startBtnEvent(playerOne);

placeComputerShips(5, randomHorizontal());
placeComputerShips(4, randomHorizontal());
placeComputerShips(3, randomHorizontal());
placeComputerShips(2, randomHorizontal());
placeComputerShips(1, randomHorizontal());

doneBtnEvent(computer, playerOne);

function placeComputerShips(shipSize: number, horizontal: boolean) {
  if (horizontal) {
    let result: boolean;
    do {
      let xCoord = Math.round(Math.random() * (9 - shipSize));
      let yCoord = Math.round(Math.random() * 9);
      result = computer
        .getPlayerBoard()
        .placeShip(shipSize, xCoord, yCoord, horizontal);
    } while (result === false);
  } else {
    let result: boolean;
    do {
      let xCoord = Math.round(Math.random() * 9);
      let yCoord = Math.round(Math.random() * (9 - shipSize));
      result = computer
        .getPlayerBoard()
        .placeShip(shipSize, xCoord, yCoord, horizontal);
    } while (result === false);
  }
}

function randomHorizontal() {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    return true;
  } else return false;
}
