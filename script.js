// Algorithm pseudocode
// 1. Create computer choice of rock, paper, or scissors (rps)
// 2. Prompt human for choice of rps via button elements
// 3. Compare human choice to computer choice
// 4. Update human or player score
// 5. Show text of victory, defeat, or draw and current score
// 6. Repeat 1-5 as a best of 5 (until one side has 3 wins)
// 7. Show text of overall victory or defeat
// 8. Prompt human for new game
// 9. Reset all scores
// 10. Start at 1 for new best of 5

const choiceMap = new Map([
    [0, "rock"],
    [1, "paper"],
    [2, "scissors"]
]);

let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 100) % 3;
    return choiceMap.get(choiceNumber)
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log(`A draw. You both chose ${humanChoice}`);
        console.log(`The current score is human: ${humanScore}, computer: ${computerScore}.`);
    } else {
        determineWinner(humanChoice, computerChoice);
    }
}

function determineWinner(humanChoice, computerChoice) {
    switch(humanChoice) {
        case choiceMap.get(0):
            if (computerChoice === choiceMap.get(1)) {
                displayRoundResolution(false, humanChoice, computerChoice);
            } else {
                displayRoundResolution(true, humanChoice, computerChoice);
            }
            break;
        case choiceMap.get(1):
            if (computerChoice === choiceMap.get(2)) {
                displayRoundResolution(false, humanChoice, computerChoice);
            } else {
                displayRoundResolution(true, humanChoice, computerChoice);
            }
            break;
        case choiceMap.get(2):
            if (computerChoice === choiceMap.get(0)) {
                displayRoundResolution(false, humanChoice, computerChoice);
            } else {
                displayRoundResolution(true, humanChoice, computerChoice);
            }
            break;
    }
}

function displayRoundResolution(humanWins, humanChoice, computerChoice) {
    if (humanWins === true) {
        humanScore++;
        console.log(`Glorious victory! You chose ${humanChoice} and the computer chose ${computerChoice}.`);
        console.log(`The current score is human: ${humanScore}, computer: ${computerScore}.`);
    } else if (humanWins === false) {
        computerScore++;
        console.log(`Defeat! You chose ${humanChoice} and the computer chose ${computerChoice}.`);
        console.log(`The current score is human: ${humanScore}, computer: ${computerScore}.`);
    }
}

function displayGameResolution() {
    if (humanScore >= 3) {
        console.log("You win! Your victory shall be celebrated for years to come!");
    } else {
        console.log("You have been defeated. Your computer looks oddly smug.");
    }
    console.log("--------------------------------------------------")
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
}
