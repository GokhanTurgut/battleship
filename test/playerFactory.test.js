import Player from "../dist/playerFactory";

const examplePlayer = Player("examplePlayer", false);
const exampleAI = Player("exampleAI", true);

test("Player creation works", () => {
  expect(examplePlayer.getName()).toBe("examplePlayer");
});

test("Player board exists", () => {
  expect(examplePlayer.getBoard()).not.toBeUndefined();
});

test("AI creation works", () => {
  expect(exampleAI.getName()).toBe("exampleAI");
});

test("AI board exists", () => {
  expect(exampleAI.getBoard()).not.toBeUndefined();
});

test("Can place ships from player object", () => {
  examplePlayer.getBoard().placeShip(3, 4, 2, true);
  examplePlayer.getBoard().placeShip(5, 2, 8, true);
  expect(examplePlayer.getBoard().gameOver()).toBe(false);
});

test("AI can make moves", () => {
  for (let i = 0; i < 100; i++) {
    exampleAI.aiMove(examplePlayer.getBoard());
  }
  expect(examplePlayer.getBoard().gameOver()).toBe(true);
});
