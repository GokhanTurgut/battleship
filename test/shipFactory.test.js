import Ship from "../js/shipFactory";

const example = Ship(4);

test("Returns ship object and isSunk with no hit returns false", () => {
  expect(example.isSunk()).toBe(false);
});

test("Hit works correctly", () => {
  example.hit(1);
  expect(example.showHealth()).toEqual([true, false, false, false]);
});

test("isSunk works with one hit", () => {
  expect(example.isSunk()).toBe(false);
});

test("Hit works correctly 2", () => {
  example.hit(2);
  example.hit(3);
  example.hit(4);
  expect(example.showHealth()).toEqual([true, true, true, true]);
});

test("isSunk works when health is all false", () => {
  expect(example.isSunk()).toBe(true);
});
