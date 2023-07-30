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
    
    // check if input is valid
    if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
        return "Error: Please enter a valid answer!";
    }

    // If it is a tie
    if (userInput === computerSelection) {
        return "It's a Tie! You both picked the same thing!";
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let computerChoice = getComputerChoice();
        let gameResult = playRound(playerChoice, computerChoice);

        if (gameResult.includes("Win")) {
            playerScore++;
        }
        else if (gameResult.includes("Lose")) {
            computerScore++;
        }
        else if (gameResult.includes("Error")) {
            // we need to subtract one from the game score so it doesn't count it.
            i--;
        }

        console.log(gameResult);
        console.log(`Current Score: ${playerScore} - ${computerScore}`);
    }

    // Final Scores
    if (playerScore == computerScore) {
        console.log(`The final score is tied! Final Score: ${playerScore} - ${computerScore}`)
    }
    else if (playerScore > computerScore) {
        console.log(`You are the winner! Final Score: ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`The computer is the winner! Final Score: ${playerScore} - ${computerScore}`);
    }
}

game();