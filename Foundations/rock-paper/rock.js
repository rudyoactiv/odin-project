const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chooseComp() {
    const ch = Math.random();
    if (ch < 1/3) {
        return 1; // Rock
    } else if (ch < 2/3) {
        return 2; // Paper
    } else {
        return 3; // Scissors
    }
}

function getUser() {
    return new Promise((resolve) => {
        rl.question("Enter 1. Rock  2. Paper  3. Scissors: ", (answer) => {
            const val = parseInt(answer);
            if ([1, 2, 3].includes(val)) {
                resolve(val);
            } else {
                console.log("Invalid input. Please enter 1, 2, or 3.");
                resolve(getUser()); // re-ask
            }
        });
    });
}

async function playGame(rounds) {
    let compScore = 0;
    let playerScore = 0;

    for (let i = 0; i < rounds; i++) {
        const cval = chooseComp();
        const pval = await getUser();

        if (cval === pval) {
            console.log(`Round ${i + 1}: Draw`);
        } else if (
            (cval === 1 && pval === 2) ||
            (cval === 2 && pval === 3) ||
            (cval === 3 && pval === 1)
        ) {
            playerScore++;
            console.log(`Round ${i + 1}: Player wins`);
        } else {
            compScore++;
            console.log(`Round ${i + 1}: Computer wins`);
        }
    }

    console.log(`Final Score\nPlayer: ${playerScore}\nComputer: ${compScore}`);
    rl.close();
}

playGame(3);
