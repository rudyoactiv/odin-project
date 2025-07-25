const playerBoard = document.getElementById("player-board");
const aiBoard = document.getElementById("ai-board");
const shipSelector = document.getElementById("ship-selector");
const rotateBtn = document.getElementById("rotate-btn");
const playerScoreDiv = document.getElementById("player-score");
const aiScoreDiv = document.getElementById("ai-score");
const startGameBtn = document.getElementById("start-game-btn");
const mobileResetBtn = document.getElementById("mob-reset-btn");
const aiBoardContainer = document.getElementById("ai-board-container");
const resultMessage = document.getElementById("result-message");

import "./style.css";

let isVertical = false;
let selectedShip = null;
let selectedOffset = 0;
let gameOver = false;
let playerTurn = true;

const ships = [5, 4, 3, 3, 2];
let placedShips = 0;
let playerGrid = Array(100).fill(null);
let aiGrid = Array(100).fill(null);
let aiTargets = [];
let playerScore = 0;
let aiScore = 0;
let previewCells = [];

function createBoard(board, isAI = false) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    if (isAI) {
      cell.addEventListener("click", handlePlayerAttack);
    } else {
      cell.addEventListener("dragover", (e) => e.preventDefault());
      cell.addEventListener("drop", handleDrop);
      cell.addEventListener("dragenter", handleDragEnter);
    }
    board.appendChild(cell);
  }
}

function renderShips() {
  shipSelector.style.display = "flex";
  ships.forEach((length) => {
    const ship = document.createElement("div");
    ship.classList.add("ship", "horizontal");
    ship.setAttribute("draggable", true);
    ship.dataset.length = length;

    for (let i = 0; i < length; i++) {
      const part = document.createElement("div");
      part.dataset.partIndex = i;
      part.addEventListener("mousedown", () => {
        selectedOffset = i;
      });
      ship.appendChild(part);
    }

    ship.addEventListener("dragstart", () => {
      selectedShip = { length: parseInt(ship.dataset.length), element: ship };
    });

    ship.addEventListener("dragend", clearPreview);
    shipSelector.appendChild(ship);
  });
}

function revealAllAIShips() {
  aiGrid.forEach((cell, idx) => {
    if (cell === "ship") {
      aiBoard.children[idx].classList.add("ship-piece");
    }
  });
}
window.revealAllAIShips = revealAllAIShips;

document.getElementById("randomize-btn").addEventListener("click", randomizePlayerBoard);

function randomizePlayerBoard() {
  resetGame();

  // Reset player grid
  playerGrid = Array(100).fill(null);
  playerBoard.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("ship-piece");
  });

  // Remove ships from shipSelector
  shipSelector.innerHTML = "<h2>Place Your Ships</h2>";
  placedShips = 0;

  ships.forEach((length) => {
    let placed = false;
    while (!placed) {
      const vertical = Math.random() < 0.5;
      const x = Math.floor(Math.random() * (vertical ? 10 : 10 - length));
      const y = Math.floor(Math.random() * (vertical ? 10 - length : 10));
      const positions = [];
      let valid = true;

      for (let i = 0; i < length; i++) {
        const xi = vertical ? x : x + i;
        const yi = vertical ? y + i : y;
        const idx = yi * 10 + xi;
        if (playerGrid[idx]) {
          valid = false;
          break;
        }
        positions.push(idx);
      }

      if (valid) {
        positions.forEach((idx) => {
          playerGrid[idx] = "ship";
          playerBoard.children[idx].classList.add("ship-piece");
        });
        placed = true;
        placedShips++;
      }
    }
  });

  // Disable ship selector
  // shipSelector.style.display = "none";
  startGameBtn.disabled = false;
  initAI();
  showShipsResetBtn();
}

rotateBtn.addEventListener("click", () => {
  isVertical = !isVertical;
  document
    .getElementById("ship-selector")
    .classList.toggle("vertical", isVertical);
  document.querySelectorAll(".ship").forEach((ship) => {
    ship.classList.toggle("horizontal", !isVertical);
    ship.classList.toggle("vertical", isVertical);
  });
});

startGameBtn.addEventListener("click", () => {
  if (startGameBtn.textContent === "Start") {
    shipSelector.style.display = "none";
    aiBoardContainer.style.display = "block";
    rotateBtn.style.display = "none";
    startGameBtn.textContent = "Reset";
    // add reset class name to startGameBtn
    startGameBtn.classList.add("reset");
    document.getElementById("randomize-btn").style.display = "none";
  } else {
    resetGame();
    // remove reset class name from startGameBtn
    startGameBtn.classList.remove("reset");
  }
});

mobileResetBtn.addEventListener("click", resetGame);

function clearPreview() {
  previewCells.forEach((idx) => {
    playerBoard.children[idx].classList.remove("preview");
  });
  previewCells = [];
}

function handleDragEnter(e) {
  if (!selectedShip) return;
  const index = parseInt(e.target.dataset.index);
  const startX = index % 10;
  const startY = Math.floor(index / 10);
  const tempPositions = [];

  for (let i = 0; i < selectedShip.length; i++) {
    const offset = i - selectedOffset;
    const x = isVertical ? startX : startX + offset;
    const y = isVertical ? startY + offset : startY;
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return clearPreview();
    const idx = y * 10 + x;
    if (playerGrid[idx]) return clearPreview();
    tempPositions.push(idx);
  }

  clearPreview();
  tempPositions.forEach((idx) => {
    playerBoard.children[idx].classList.add("preview");
  });
  previewCells = tempPositions;
}

function handleDrop(e) {
  const index = parseInt(e.target.dataset.index);
  const startX = index % 10;
  const startY = Math.floor(index / 10);
  const positions = [];

  for (let i = 0; i < selectedShip.length; i++) {
    const offset = i - selectedOffset;
    const x = isVertical ? startX : startX + offset;
    const y = isVertical ? startY + offset : startY;
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return clearPreview();
    const idx = y * 10 + x;
    if (playerGrid[idx]) return clearPreview();
    positions.push(idx);
  }

  positions.forEach((idx) => {
    playerGrid[idx] = "ship";
    const cell = playerBoard.children[idx];
    cell.classList.add("ship-piece");
  });

  clearPreview();
  selectedShip.element.remove();
  placedShips++;
  if (placedShips === ships.length) {
    initAI();
    startGameBtn.disabled = false;
    showShipsResetBtn();
  }
}

function initAI() {
  ships.forEach((length) => {
    let placed = false;
    while (!placed) {
      const vertical = Math.random() < 0.5;
      const x = Math.floor(Math.random() * (vertical ? 10 : 10 - length));
      const y = Math.floor(Math.random() * (vertical ? 10 - length : 10));
      const positions = [];
      let valid = true;

      for (let i = 0; i < length; i++) {
        const xi = vertical ? x : x + i;
        const yi = vertical ? y + i : y;
        const idx = yi * 10 + xi;
        if (aiGrid[idx]) {
          valid = false;
          break;
        }
        positions.push(idx);
      }

      if (valid) {
        positions.forEach((idx) => (aiGrid[idx] = "ship"));
        placed = true;
      }
    }
  });
}

function handlePlayerAttack(e) {
  if (gameOver || !playerTurn) return;

  const idx = parseInt(e.target.dataset.index);
  if (
    aiBoard.children[idx].classList.contains("hit") ||
    aiBoard.children[idx].classList.contains("miss")
  )
    return;

  if (aiGrid[idx] === "ship") {
    e.target.classList.add("hit");
    aiGrid[idx] = "hit";
    playerScore++;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  } else {
    e.target.classList.add("miss");
    playerTurn = false;
    aiTurn();
  }

  checkEnd();
}

function aiTurn() {
  if (gameOver) return;

  let idx;

  // clean up aiTargets to remove already used cells
  aiTargets = aiTargets.filter(
    (i) =>
      !playerBoard.children[i].classList.contains("hit") &&
      !playerBoard.children[i].classList.contains("miss")
  );

  if (aiTargets.length) {
    idx = aiTargets.pop();
  } else {
    do {
      idx = Math.floor(Math.random() * 100);
    } while (
      playerBoard.children[idx].classList.contains("hit") ||
      playerBoard.children[idx].classList.contains("miss")
    );
  }

  const cell = playerBoard.children[idx];
  if (playerGrid[idx] === "ship") {
    cell.classList.add("hit");
    playerGrid[idx] = "hit";
    aiScore++;
    aiScoreDiv.textContent = `AI Score: ${aiScore}`;
    const neighbors = getNeighbors(idx);
    aiTargets.push(...neighbors);
    setTimeout(aiTurn, 500);
  } else {
    cell.classList.add("miss");
    playerTurn = true;
  }

  checkEnd();
}

function getNeighbors(idx) {
  const x = idx % 10;
  const y = Math.floor(idx / 10);
  const deltas = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  return deltas
    .map(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) return ny * 10 + nx;
      return null;
    })
    .filter(
      (n) =>
        n !== null &&
        !playerBoard.children[n].classList.contains("hit") &&
        !playerBoard.children[n].classList.contains("miss")
    );
}

function checkEnd() {
  if (gameOver) return;

  const total = ships.reduce((a, b) => a + b);
  if (playerScore === total) {
    resultMessage.textContent = "You win!";
    resultMessage.style.display = "block";
    gameOver = true;
  }
  if (aiScore === total) {
    revealAllAIShips();
    resultMessage.textContent = "AI wins!";
    resultMessage.style.display = "block";
    gameOver = true;
  }
}

function resetGame() {
  // Reset game state
  resultMessage.textContent = "";
  resultMessage.style.display = "none";
  gameOver = false;
  rotateBtn.style.display = "";
  placedShips = 0;
  selectedShip = null;
  selectedOffset = 0;
  isVertical = false;
  previewCells = [];
  playerGrid = Array(100).fill(null);
  aiGrid = Array(100).fill(null);
  aiTargets = [];
  playerScore = 0;
  aiScore = 0;

  // Reset scores and UI
  playerScoreDiv.textContent = "Player Score: 0";
  aiScoreDiv.textContent = "AI Score: 0";
  aiBoardContainer.style.display = "none";
  startGameBtn.disabled = true;
  startGameBtn.textContent = "Start";
  startGameBtn.classList.remove("reset");
  startGameBtn.style.display = "";

  // Clear both boards
  playerBoard.innerHTML = "";
  aiBoard.innerHTML = "";

  // Reset rotation UI
  document.getElementById("ship-selector").classList.remove("vertical");

  // Show randomize button
  document.getElementById("randomize-btn").style.display = "";

  // Clear and re-render
  shipSelector.innerHTML = "<h2>Place Your Ships</h2>";
  renderShips();
  createBoard(playerBoard);
  createBoard(aiBoard, true);
  playerTurn = true;
}

function showShipsResetBtn() {
  if (!document.getElementById("ships-reset-btn")) {
    const shipsResetBtn = document.createElement("button");
    shipsResetBtn.id = "ships-reset-btn";
    shipsResetBtn.textContent = "Reset";
    shipsResetBtn.addEventListener("click", resetGame);
    shipSelector.appendChild(shipsResetBtn);
  }
}


createBoard(playerBoard);
createBoard(aiBoard, true);
renderShips();
