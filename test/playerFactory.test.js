import Player from "../js/playerFactory";

const examplePlayer = Player(false);
const exampleAI = Player(true);

test("Player board exists", () => {
  expect(examplePlayer.getPlayerBoard()).not.toBeUndefined();
});

test("AI board exists", () => {
  expect(exampleAI.getPlayerBoard()).not.toBeUndefined();
});

test("Can place ships from player object", () => {
  examplePlayer.getPlayerBoard().placeShip(3, 4, 2, true);
  examplePlayer.getPlayerBoard().placeShip(5, 2, 8, true);
  expect(examplePlayer.getPlayerBoard().gameOver()).toBe(false);
});

test("AI can make moves", () => {
  for (let i = 0; i < 100; i++) {
    exampleAI.aiMove(examplePlayer.getPlayerBoard());
  }
  expect(examplePlayer.getPlayerBoard().gameOver()).toBe(true);
});
