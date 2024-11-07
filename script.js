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

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

console.log(getComputerChoice())
console.log(getHumanChoice())