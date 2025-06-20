const playerBoard = document.getElementById('player-board');
const aiBoard = document.getElementById('ai-board');
const shipSelector = document.getElementById('ship-selector');
const rotateBtn = document.getElementById('rotate-btn');
const playerScoreDiv = document.getElementById('player-score');
const aiScoreDiv = document.getElementById('ai-score');
const remainingShipsDiv = document.getElementById('remaining-ships');
// css import
import './style.css';

let isVertical = false;
let selectedShip = null;
const ships = [5, 4, 3, 3, 2];
let placedShips = 0;
let playerGrid = Array(100).fill(null);
let aiGrid = Array(100).fill(null);
let aiHits = [];
let aiTargets = [];
let playerScore = 0;
let aiScore = 0;

function createBoard(board, isAI = false) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    if (isAI) {
      cell.addEventListener('click', handlePlayerAttack);
    } else {
      cell.addEventListener('dragover', e => e.preventDefault());
      cell.addEventListener('drop', handleDrop);
    }
    board.appendChild(cell);
  }
}

function renderShips() {
  ships.forEach(length => {
    const ship = document.createElement('div');
    ship.classList.add('ship', 'horizontal');
    ship.setAttribute('draggable', true);
    ship.dataset.length = length;
    for (let i = 0; i < length; i++) {
      const part = document.createElement('div');
      ship.appendChild(part);
    }
    ship.addEventListener('dragstart', () => {
      selectedShip = { length: parseInt(ship.dataset.length), element: ship };
    });
    shipSelector.appendChild(ship);
  });
}

rotateBtn.addEventListener('click', () => {
  isVertical = !isVertical;
  document.querySelectorAll('.ship').forEach(ship => {
    ship.classList.toggle('horizontal', !isVertical);
    ship.classList.toggle('vertical', isVertical);
  });
});

function handleDrop(e) {
  const index = parseInt(e.target.dataset.index);
  const startX = index % 10;
  const startY = Math.floor(index / 10);
  const positions = [];
  for (let i = 0; i < selectedShip.length; i++) {
    const x = isVertical ? startX : startX + i;
    const y = isVertical ? startY + i : startY;
    if (x >= 10 || y >= 10) return;
    const idx = y * 10 + x;
    if (playerGrid[idx]) return;
    positions.push(idx);
  }
  positions.forEach(idx => {
    playerGrid[idx] = 'ship';
    const cell = playerBoard.children[idx];
    cell.classList.add('ship-piece');
  });
  selectedShip.element.remove();
  placedShips++;
  if (placedShips === ships.length) initAI();
  remainingShipsDiv.textContent = `Remaining Ships: ${ships.length - placedShips}`;
}

function initAI() {
  ships.forEach(length => {
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
        positions.forEach(idx => aiGrid[idx] = 'ship');
        placed = true;
      }
    }
  });
}

function handlePlayerAttack(e) {
  const idx = parseInt(e.target.dataset.index);
  if (aiBoard.children[idx].classList.contains('hit') || aiBoard.children[idx].classList.contains('miss')) return;
  if (aiGrid[idx] === 'ship') {
    e.target.classList.add('hit');
    aiGrid[idx] = 'hit';
    playerScore++;
    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  } else {
    e.target.classList.add('miss');
    aiTurn();
  }
  checkEnd();
}

function aiTurn() {
  let idx;
  if (aiTargets.length) {
    idx = aiTargets.pop();
  } else {
    do {
      idx = Math.floor(Math.random() * 100);
    } while (playerBoard.children[idx].classList.contains('hit') || playerBoard.children[idx].classList.contains('miss'));
  }
  const cell = playerBoard.children[idx];
  if (playerGrid[idx] === 'ship') {
    cell.classList.add('hit');
    playerGrid[idx] = 'hit';
    aiScore++;
    aiScoreDiv.textContent = `AI Score: ${aiScore}`;
    const neighbors = getNeighbors(idx);
    aiTargets.push(...neighbors);
    setTimeout(aiTurn, 500);
  } else {
    cell.classList.add('miss');
  }
  checkEnd();
}

function getNeighbors(idx) {
  const x = idx % 10;
  const y = Math.floor(idx / 10);
  const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  return deltas
    .map(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) return ny * 10 + nx;
      return null;
    })
    .filter(n => n !== null && !playerBoard.children[n].classList.contains('hit') && !playerBoard.children[n].classList.contains('miss'));
}

function checkEnd() {
  if (playerScore === ships.reduce((a, b) => a + b)) alert("You win!");
  if (aiScore === ships.reduce((a, b) => a + b)) alert("AI wins!");
}

createBoard(playerBoard);
createBoard(aiBoard, true);
renderShips();
