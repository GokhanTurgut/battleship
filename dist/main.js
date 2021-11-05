/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/gameboardFactory.js":
/*!********************************!*\
  !*** ./js/gameboardFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./js/shipFactory.js\");\n\nfunction Gameboard() {\n    const board = [];\n    for (let i = 0; i < 10; i++) {\n        let row = [];\n        for (let j = 0; j < 10; j++) {\n            row.push({\n                ship: \"none\",\n                shipLength: 0,\n                shipDivision: 0,\n                hit: false,\n            });\n        }\n        board.push(row);\n    }\n    const ships = [];\n    function placeShip(length, xCoord, yCoord, horizontal) {\n        let shipCollision = false;\n        if (horizontal) {\n            for (let i = 0; i < length; i++) {\n                if (board[yCoord][xCoord + i].ship !== \"none\") {\n                    shipCollision = true;\n                }\n            }\n        }\n        else {\n            for (let i = 0; i < length; i++) {\n                if (board[yCoord + i][xCoord].ship !== \"none\") {\n                    shipCollision = true;\n                }\n            }\n        }\n        if (shipCollision) {\n            return false;\n        }\n        else {\n            const newShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n            ships.push(newShip);\n            if (horizontal) {\n                for (let i = 0; i < length; i++) {\n                    board[yCoord][xCoord + i].ship = newShip;\n                    board[yCoord][xCoord + i].shipLength = length;\n                    board[yCoord][xCoord + i].shipDivision = i + 1;\n                }\n            }\n            else {\n                for (let i = 0; i < length; i++) {\n                    board[yCoord + i][xCoord].ship = newShip;\n                    board[yCoord + i][xCoord].shipLength = length;\n                    board[yCoord + i][xCoord].shipDivision = i + 1;\n                }\n            }\n            return true;\n        }\n    }\n    function receiveAttack(xCoord, yCoord) {\n        let location = board[yCoord][xCoord];\n        if (location.hit === false) {\n            if (location.ship === \"none\") {\n                location.hit = true;\n            }\n            else {\n                location.ship.hit(location.shipDivision);\n                location.hit = true;\n            }\n            return true;\n        }\n        else\n            return false;\n    }\n    function gameOver() {\n        let allShipsSunk = true;\n        ships.forEach((ship) => {\n            if (ship.isSunk() === false) {\n                allShipsSunk = false;\n            }\n        });\n        return allShipsSunk;\n    }\n    function getBoard() {\n        return board;\n    }\n    return { placeShip, receiveAttack, gameOver, getBoard };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack:///./js/gameboardFactory.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./js/interface.js\");\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ \"./js/playerFactory.js\");\n\n\nconst playerOne = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\nconst computer = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\n(0,_interface__WEBPACK_IMPORTED_MODULE_0__.startBtnEvent)(playerOne);\nplaceComputerShips(5, randomHorizontal());\nplaceComputerShips(4, randomHorizontal());\nplaceComputerShips(3, randomHorizontal());\nplaceComputerShips(2, randomHorizontal());\nplaceComputerShips(1, randomHorizontal());\n(0,_interface__WEBPACK_IMPORTED_MODULE_0__.doneBtnEvent)(computer, playerOne);\nfunction placeComputerShips(shipSize, horizontal) {\n    if (horizontal) {\n        let result;\n        do {\n            let xCoord = Math.round(Math.random() * (9 - shipSize));\n            let yCoord = Math.round(Math.random() * 9);\n            result = computer\n                .getPlayerBoard()\n                .placeShip(shipSize, xCoord, yCoord, horizontal);\n        } while (result === false);\n    }\n    else {\n        let result;\n        do {\n            let xCoord = Math.round(Math.random() * 9);\n            let yCoord = Math.round(Math.random() * (9 - shipSize));\n            result = computer\n                .getPlayerBoard()\n                .placeShip(shipSize, xCoord, yCoord, horizontal);\n        } while (result === false);\n    }\n}\nfunction randomHorizontal() {\n    let randomNumber = Math.random();\n    if (randomNumber > 0.5) {\n        return true;\n    }\n    else\n        return false;\n}\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/interface.js":
/*!*************************!*\
  !*** ./js/interface.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startBtnEvent\": () => (/* binding */ startBtnEvent),\n/* harmony export */   \"doneBtnEvent\": () => (/* binding */ doneBtnEvent)\n/* harmony export */ });\nconst welcomeMassage = document.getElementById(\"welcomeMassage\");\nconst playerOneName = (document.getElementById(\"playerOneName\"));\nconst placeShipMassage = document.getElementById(\"placeShipMassage\");\nconst playerOneContainer = document.getElementById(\"playerOneContainer\");\nconst playerTwoContainer = document.getElementById(\"playerTwoContainer\");\nconst playerOneNameDisplay = document.getElementById(\"playerOneNameDisplay\");\nconst playerTwoNameDisplay = document.getElementById(\"playerTwoNameDisplay\");\nconst playerOneBoardContainer = document.getElementById(\"playerOneBoard\");\nconst playerTwoBoardContainer = document.getElementById(\"playerTwoBoard\");\nconst gameOverModal = document.getElementById(\"gameOverModal\");\nconst gameOverMassage = document.getElementById(\"gameOverMassage\");\nconst startBtn = document.getElementById(\"startBtn\");\nconst donePlacingBtn = document.getElementById(\"donePlacingBtn\");\nconst rotateBtn = document.getElementById(\"rotateBtn\");\nconst playerOneCells = [];\nconst playerTwoCells = [];\nlet horizontal = true;\nlet shipSize = 5;\nfunction startBtnEvent(player) {\n    startBtn.addEventListener(\"click\", () => {\n        playerOneNameDisplay.textContent = playerOneName.value;\n        placeShipState();\n        createBoards();\n        placeShipEventAdder(player);\n        rotateBtnEvent();\n    });\n}\nfunction doneBtnEvent(computer, player) {\n    donePlacingBtn.addEventListener(\"click\", () => {\n        if (shipSize === 0) {\n            computerGameplayState();\n            displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);\n            playerTwoContainer.classList.remove(\"displayNone\");\n            computerCellEventAdder(computer, player);\n        }\n    });\n}\nfunction createBoards() {\n    for (let i = 0; i < 100; i++) {\n        const cell = document.createElement(\"div\");\n        cell.classList.add(\"boardCell\");\n        playerOneCells.push(cell);\n        playerOneBoardContainer.appendChild(cell);\n    }\n    for (let i = 0; i < 100; i++) {\n        const cell = document.createElement(\"div\");\n        cell.classList.add(\"boardCell\");\n        playerTwoCells.push(cell);\n        playerTwoBoardContainer.appendChild(cell);\n    }\n}\nfunction displayShips(board, playerCellArray, showShip) {\n    for (let i = 0; i < 10; i++) {\n        for (let j = 0; j < 10; j++) {\n            if (board[i][j].ship !== \"none\" && showShip === true) {\n                playerCellArray[i * 10 + j].classList.add(\"ship\");\n            }\n            if (board[i][j].ship !== \"none\" && board[i][j].hit === true) {\n                playerCellArray[i * 10 + j].classList.add(\"damage\");\n            }\n            if (board[i][j].ship === \"none\" && board[i][j].hit === true) {\n                playerCellArray[i * 10 + j].classList.add(\"hit\");\n            }\n        }\n    }\n}\nfunction computerCellEventAdder(computer, player) {\n    for (let i = 0; i < playerTwoCells.length; i++) {\n        let xCoord = i % 10;\n        let yCoord = Math.floor(i / 10);\n        function cellEventRemover(cellsArray) {\n            cellsArray.forEach((cell) => {\n                cell.removeEventListener(\"click\", cellEvent);\n            });\n        }\n        function cellEvent() {\n            computer.getPlayerBoard().receiveAttack(xCoord, yCoord);\n            displayShips(computer.getPlayerBoard().getBoard(), playerTwoCells, false);\n            computer.aiMove(player.getPlayerBoard());\n            displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);\n            cellEventRemover(playerTwoCells);\n            if (computer.getPlayerBoard().gameOver()) {\n                gameOverModal.classList.remove(\"displayNone\");\n                gameOverMassage.textContent = \"Player wins!\";\n            }\n            if (player.getPlayerBoard().gameOver()) {\n                gameOverModal.classList.remove(\"displayNone\");\n                gameOverMassage.textContent = \"Computer wins!\";\n            }\n        }\n        if (computer.getPlayerBoard().getBoard()[yCoord][xCoord].hit === false) {\n            playerTwoCells[i].addEventListener(\"click\", cellEvent);\n        }\n    }\n}\nfunction placeShipEventAdder(player) {\n    playerOneCells.forEach((cell, index) => {\n        cell.addEventListener(\"mousemove\", function hoverState() {\n            for (let i = 0; i < shipSize; i++) {\n                if (horizontal === true && index % 10 < 11 - shipSize) {\n                    playerOneCells[index + i].classList.add(\"hovering\");\n                }\n                if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {\n                    playerOneCells[index + i * 10].classList.add(\"hovering\");\n                }\n            }\n        });\n        cell.addEventListener(\"mouseout\", function hoverOverState() {\n            for (let i = 0; i < shipSize + 1; i++) {\n                if (horizontal === true && index % 10 < 11 - shipSize) {\n                    playerOneCells[index + i].classList.remove(\"hovering\");\n                }\n                if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {\n                    playerOneCells[index + i * 10].classList.remove(\"hovering\");\n                }\n            }\n        });\n        cell.addEventListener(\"click\", function clickPlaceShip() {\n            if (horizontal === true && index % 10 < 11 - shipSize) {\n                let xCoord = index % 10;\n                let yCoord = Math.floor(index / 10);\n                if (player\n                    .getPlayerBoard()\n                    .placeShip(shipSize, xCoord, yCoord, horizontal)) {\n                    displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);\n                    shipSize--;\n                }\n            }\n            if (horizontal === false && Math.floor(index / 10) < 11 - shipSize) {\n                let xCoord = index % 10;\n                let yCoord = Math.floor(index / 10);\n                if (player\n                    .getPlayerBoard()\n                    .placeShip(shipSize, xCoord, yCoord, horizontal)) {\n                    displayShips(player.getPlayerBoard().getBoard(), playerOneCells, true);\n                    shipSize--;\n                }\n            }\n        });\n    });\n}\nfunction rotateBtnEvent() {\n    rotateBtn.classList.remove(\"displayNone\");\n    rotateBtn.addEventListener(\"click\", () => {\n        if (horizontal) {\n            horizontal = false;\n        }\n        else {\n            horizontal = true;\n        }\n    });\n}\nfunction placeShipState() {\n    welcomeMassage.classList.add(\"displayNone\");\n    playerOneName.classList.add(\"displayNone\");\n    startBtn.classList.add(\"displayNone\");\n    placeShipMassage.classList.remove(\"displayNone\");\n    playerOneContainer.classList.remove(\"displayNone\");\n    donePlacingBtn.classList.remove(\"displayNone\");\n}\nfunction computerGameplayState() {\n    placeShipMassage.classList.add(\"displayNone\");\n    playerTwoNameDisplay.textContent = \"Computer\";\n    rotateBtn.classList.add(\"displayNone\");\n}\n\n\n\n//# sourceURL=webpack:///./js/interface.js?");

/***/ }),

/***/ "./js/playerFactory.js":
/*!*****************************!*\
  !*** ./js/playerFactory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./js/gameboardFactory.js\");\n\nfunction Player(ai) {\n    const playerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    function getPlayerBoard() {\n        return playerBoard;\n    }\n    if (ai) {\n        function aiMove(enemyBoard) {\n            let result;\n            do {\n                let xCoord = Math.round(Math.random() * 9);\n                let yCoord = Math.round(Math.random() * 9);\n                result = enemyBoard.receiveAttack(xCoord, yCoord);\n            } while (result === false);\n        }\n        return { getPlayerBoard, aiMove };\n    }\n    else\n        return { getPlayerBoard };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack:///./js/playerFactory.js?");

/***/ }),

/***/ "./js/shipFactory.js":
/*!***************************!*\
  !*** ./js/shipFactory.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length) {\n    const health = [];\n    for (let i = 0; i < length; i++) {\n        health.push(false);\n    }\n    function hit(position) {\n        health[position - 1] = true;\n    }\n    function isSunk() {\n        let shipSunk = true;\n        health.forEach((position) => {\n            if (position === false) {\n                shipSunk = false;\n            }\n        });\n        return shipSunk;\n    }\n    function showHealth() {\n        return health;\n    }\n    return { hit, isSunk, showHealth };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack:///./js/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;