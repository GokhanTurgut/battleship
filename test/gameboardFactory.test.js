import Gameboard from "../js/gameboardFactory";

const exampleBoard = Gameboard();

test("Game over function returns false", () => {
  exampleBoard.placeShip(2, 0, 0, true);
  expect(exampleBoard.gameOver()).toBe(false);
});

test("Gameboard places ship and takes damage", () => {
  exampleBoard.receiveAttack(0, 0);
  exampleBoard.receiveAttack(1, 0);
  expect(exampleBoard.gameOver()).toBe(true);
});
