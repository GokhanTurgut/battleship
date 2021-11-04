import { startBtnEvent, doneBtnEvent } from "./interface";
import Player from "./playerFactory";

const playerOne = Player(false);
const computer = Player(true);

startBtnEvent();

playerOne.getPlayerBoard().placeShip(4, 2, 0, true);
playerOne.getPlayerBoard().placeShip(2, 4, 2, true);
playerOne.getPlayerBoard().placeShip(6, 0, 7, true);

computer.getPlayerBoard().placeShip(4, 2, 0, true);
computer.getPlayerBoard().placeShip(2, 4, 2, true);
computer.getPlayerBoard().placeShip(6, 0, 7, true);

doneBtnEvent(computer, playerOne);
