// Algorithm pseudocode
// 1. Create computer choice of rock, paper, or scissors (rps)
// 2. Prompt human for choice of rps
// 3. Get human choice of rps as string
// 4. Compare human choice to computer choice
// 5. Update human or player score
// 6. Return text of victory, defeat, or draw
// 7. Return text of current score comparison
// 8. Prompt player for choice again 

const choiceMap = new Map([
    [0, "rock"],
    [1, "paper"],
    [2, "scissors"]
]);

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 100) % 3;
    return choiceMap.get(choiceNumber)
}

function validateHumanChoice(rawText) {
    let lowerCaseText = (rawText != null) ? rawText.toLowerCase() : ""
    switch(lowerCaseText) {
        case "":
            return validateHumanChoice(prompt("Please enter a value. Rock, paper, or scissors?"));
        case choiceMap.get(0):
        case choiceMap.get(1):
        case choiceMap.get(2):
            return lowerCaseText;
        default:
            return validateHumanChoice(prompt("Please enter a valid value. Rock, paper or scissors?"));
    }
} 

function getHumanChoice() {
    let humanChoiceRaw = prompt("Rock, paper, or scissors?");
    return validateHumanChoice(humanChoiceRaw);
}

function playRound(humanChoice, computerChoice) {
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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0;

playRound(humanChoice, computerChoice);