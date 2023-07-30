function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else if (randomNum === 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    let userInput = playerSelection.toLowerCase();
    console.log(userInput);

    // If it is a tie
    if (userInput === computerSelection) {
        return "It's a Tie!";
    }

    if (userInput === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    }
    else if (userInput === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    }
    else if (userInput === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
    }
    else if (userInput === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    }
    else if (userInput === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    }
    else if (userInput === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    }
}

const playerSelection = "RoCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));