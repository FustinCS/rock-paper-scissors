
let playerScore = 0;
let computerScore = 0;

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

function checkWinner() {
    if (playerScore < 5 && computerScore < 5) {
        return false;
    }
    else {
        return true;
    }
}

function playRound(e) {

    let userInput = e.target.id;
    let computerSelection = getComputerChoice();
    let score = document.querySelector(".score");

    if (!checkWinner()) {  //when someone hasn't reached 5 score
        if (userInput === "rock" && computerSelection === "paper") {
            computerScore++;
        }
        else if (userInput === "rock" && computerSelection === "scissors") {
            playerScore++;
        }
        else if (userInput === "paper" && computerSelection === "scissors") {
            computerScore++;
        }
        else if (userInput === "paper" && computerSelection === "rock") {
            playerScore++;
        }
        else if (userInput === "scissors" && computerSelection === "rock") {
            computerScore++;
        }
        else if (userInput === "scissors" && computerSelection === "paper") {
            playerScore++;
        }
        score.textContent = `${playerScore} - ${computerScore}`;
    }

    if (computerScore >= 5) {
        alert("Computer Wins!");
    }
    else if (playerScore >= 5) {
        alert("Player Wins!");
    }
}


const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const score = document.querySelector(".score");

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);