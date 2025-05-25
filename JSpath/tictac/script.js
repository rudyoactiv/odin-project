/* ============================================
   Gameboard Module (IIFE)
   Stores and manages the Tic Tac Toe board state
============================================ */
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const setMarker = (index, marker) => {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };

  const isFull = () => board.every((cell) => cell !== "");

  const getAvailableMoves = () =>
    board
      .map((cell, index) => (cell === "" ? index : null))
      .filter((i) => i !== null);

  return { getBoard, resetBoard, setMarker, isFull, getAvailableMoves };
})();

/* ============================================
   Player Factory
   Creates player objects with name and marker
============================================ */
const Player = (name, marker) => ({ name, marker });

/* ============================================
   Game Controller Module (IIFE)
   Handles game flow, win logic, and turn switching
============================================ */
const GameController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let gameActive = false;

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = (
    p1Name = "Player 1",
    p2Name = "Player 2",
    p1Marker = "X",
    p2Marker = "O"
  ) => {
    player1 = Player(p1Name, p1Marker);
    player2 = Player(p2Name, p2Marker);
    currentPlayer = player1;
    Gameboard.resetBoard();
    gameActive = true;
    DisplayController.updateStatus(
      `${currentPlayer.name}'s turn - ${currentPlayer.marker}`
    );
    DisplayController.renderBoard();
  };

  const playTurn = async (index) => {
    if (!gameActive || !Gameboard.setMarker(index, currentPlayer.marker))
      return;

    DisplayController.renderBoard();

    const winningCombo = checkWinner(currentPlayer.marker);
    if (winningCombo) {
      gameActive = false;
      DisplayController.updateStatus(`${currentPlayer.name} wins!`);
      await DisplayController.highlightWinningSquares(winningCombo);
    } else if (Gameboard.isFull()) {
      gameActive = false;
      DisplayController.updateStatus("It's a tie!");
    } else {
      switchPlayer();
      DisplayController.updateStatus(
        `${currentPlayer.name}'s turn - ${currentPlayer.marker}`
      );
    }
  };

  const checkWinner = (marker) => {
    for (const combo of winningCombos) {
      if (combo.every((index) => Gameboard.getBoard()[index] === marker)) {
        return combo; // Return winning combo array
      }
    }
    return null;
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const restartGame = () => {
    startGame(player1.name, player2.name, player1.marker, player2.marker);
  };

  const isGameActive = () => gameActive;

  return { startGame, playTurn, restartGame, isGameActive };
})();

/* ============================================
   Display Controller Module (IIFE)
   Handles all DOM manipulation and rendering
============================================ */
const DisplayController = (() => {
  const fields = document.querySelectorAll(".field");
  const statusDiv = document.querySelector(".status");
  const restartBtn = document.querySelector(".restart");
  const swapBtn = document.getElementById("swap-btn");
  const p1Span = document.getElementById("player1-marker");
  const p2Span = document.getElementById("player2-marker");

  // Render the board to the DOM based on the Gameboard state
  const renderBoard = () => {
    const board = Gameboard.getBoard();
    fields.forEach((field, index) => {
      field.textContent = board[index];
      field.classList.remove("winning");
    });
  };

  // Update the status message
  const updateStatus = (message) => {
    statusDiv.textContent = message;
  };

  // Setup event listeners
  fields.forEach((field) => {
    field.addEventListener("click", (e) => {
      const index = +e.target.dataset.index;
      if (GameController.isGameActive()) {
        GameController.playTurn(index);
      }
    });
  });

  // Flip animation on reset
  const flipAllBoxes = () => {
    fields.forEach((field, i) => {
      setTimeout(() => {
        field.classList.add("flip");

        // flip anim clear contents
        setTimeout(() => {
          field.textContent = "";
          field.classList.remove("winning");
        }, 300);

        field.addEventListener(
          "animationend",
          () => {
            field.classList.remove("flip");
          },
          { once: true }
        );
      }, i * 150);
    });
  };

  restartBtn.addEventListener("click", () => {
    flipAllBoxes();
    
    setTimeout(() => {
      GameController.restartGame();
    }, fields.length * 150 + 200);
  });

  swapBtn.addEventListener("click", () => {
    const p1 = p1Span.textContent;
    const p2 = p2Span.textContent;
    p1Span.textContent = p2;
    p2Span.textContent = p1;
    GameController.startGame("Player 1", "Player 2", p2, p1);
  });

  const highlightWinningSquares = async (combo) => {
    for (const index of combo) {
      fields[index].classList.add("winning");
      // wait 300ms before highlighting next
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  };

  return { renderBoard, updateStatus, highlightWinningSquares };
})();

// Initialize the game with default players and markers
const p1 = document.getElementById("player1-marker").textContent;
const p2 = document.getElementById("player2-marker").textContent;
GameController.startGame("Player 1", "Player 2", p1, p2);
