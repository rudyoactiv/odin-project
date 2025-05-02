let pscore = 0;
let cscore = 0;
const history = document.getElementById('history');

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie! You chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        document.getElementById('pscore').innerHTML = `<p>Your Score: ${++pscore}</p>`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        document.getElementById('cscore').innerHTML = `<p>Computer Score: ${++cscore}</p>`;
    }

    document.getElementById('result').innerHTML = `<p>${result}</p>`;
    if (pscore === 5) {
        document.getElementById('result').innerHTML = `<p>You win the game!</p>`;
        const li = document.createElement('li');
        li.textContent = 'You won the game!';
        history.insertBefore(li, history.firstChild);
        resetGame();
    }
    if (cscore === 5) {
        document.getElementById('result').innerHTML = `<p>Computer wins the game!</p>`;
        const li = document.createElement('li');
        li.textContent = 'Computer won the game!';
        history.insertBefore(li, history.firstChild);     
        resetGame();
    }
}

function resetGame() {
    pscore = 0;
    cscore = 0;
    document.getElementById('pscore').innerHTML = `<p>Your Score: ${pscore}</p>`;
    document.getElementById('cscore').innerHTML = `<p>Computer Score: ${cscore}</p>`;
    document.getElementById('result').innerHTML = `<p>Game reset. Start again!</p>`;
    // winner history
    
}