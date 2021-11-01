"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ship(length) {
    const health = [];
    for (let i = 0; i < length; i++) {
        health.push(false);
    }
    function hit(position) {
        health[position - 1] = true;
    }
    function isSunk() {
        let shipSunk = true;
        health.forEach((position) => {
            if (position === false) {
                shipSunk = false;
            }
        });
        return shipSunk;
    }
    function showHealth() {
        return health;
    }
    return { hit, isSunk, showHealth };
}
exports.default = Ship;
