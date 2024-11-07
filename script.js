// Algorithm pseudocode
// 1. Create computer choice of rock, paper, or scissors (rps)
// 2. Prompt human for choice of rps
// 3. Get human choice of rps as string
// 4. Compare human choice to computer choice
// 5. Return text of victory, defeat, or draw
// 6. Update human or player score
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
            validateHumanChoice(prompt("Please enter a value. Rock, paper, or scissors?"));
            break;
        case choiceMap.get(0):
        case choiceMap.get(1):
        case choiceMap.get(2):
            return lowerCaseText;
        default:
            validateHumanChoice(prompt("Please enter a valid value. Rock, paper or scissors?"));
            break;
        
    }
} 

function getHumanChoice() {
    let humanChoiceRaw = prompt("Rock, paper, or scissors?");
    return validateHumanChoice(humanChoiceRaw);
}

function playRound(humanChoice, computerChoice) {
    // code for play to go here
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

let computerScore = 0;
let humanScore = 0;

playRound(humanChoice, computerChoice);