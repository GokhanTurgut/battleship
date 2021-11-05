import Ship from "./shipFactory";

function Gameboard() {
  const board: any[] = [];
  for (let i = 0; i < 10; i++) {
    let row: object[] = [];
    for (let j = 0; j < 10; j++) {
      row.push({
        ship: "none",
        shipLength: 0,
        shipDivision: 0,
        hit: false,
      });
    }
    board.push(row);
  }
  const ships: any[] = [];
  function placeShip(
    length: number,
    xCoord: number,
    yCoord: number,
    horizontal: boolean
  ) {
    let shipCollision = false;
    if (horizontal) {
      for (let i = 0; i < length; i++) {
        if (board[yCoord][xCoord + i].ship !== "none") {
          shipCollision = true;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (board[yCoord + i][xCoord].ship !== "none") {
          shipCollision = true;
        }
      }
    }
    if (shipCollision) {
      return false;
    } else {
      const newShip = Ship(length);
      ships.push(newShip);
      if (horizontal) {
        for (let i = 0; i < length; i++) {
          board[yCoord][xCoord + i].ship = newShip;
          board[yCoord][xCoord + i].shipLength = length;
          board[yCoord][xCoord + i].shipDivision = i + 1;
        }
      } else {
        for (let i = 0; i < length; i++) {
          board[yCoord + i][xCoord].ship = newShip;
          board[yCoord + i][xCoord].shipLength = length;
          board[yCoord + i][xCoord].shipDivision = i + 1;
        }
      }
      return true;
    }
  }
  function receiveAttack(xCoord: number, yCoord: number) {
    let location = board[yCoord][xCoord];
    if (location.hit === false) {
      if (location.ship === "none") {
        location.hit = true;
      } else {
        location.ship.hit(location.shipDivision);
        location.hit = true;
      }
      return true;
    } else return false;
  }
  function gameOver() {
    let allShipsSunk = true;
    ships.forEach((ship) => {
      if (ship.isSunk() === false) {
        allShipsSunk = false;
      }
    });
    return allShipsSunk;
  }
  function getBoard() {
    return board;
  }
  return { placeShip, receiveAttack, gameOver, getBoard };
}

export default Gameboard;
