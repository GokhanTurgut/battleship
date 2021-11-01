"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameboardFactory_1 = __importDefault(require("./gameboardFactory"));
function Player(name, ai) {
    const playerBoard = (0, gameboardFactory_1.default)();
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
exports.default = Player;
