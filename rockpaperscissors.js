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
    // If it is a tie
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    }
}