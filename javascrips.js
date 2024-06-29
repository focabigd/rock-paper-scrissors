function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
let score = document.querySelector(".score");
let result = document.querySelector(".result");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        result.textContent = `${computerChoice} is equal to ${humanChoice}. Nobody wins.`;
    } else if (
        (computerChoice === 'Rock' && humanChoice === 'Paper') ||
        (computerChoice === 'Paper' && humanChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && humanChoice === 'Rock')
    ) {
        result.textContent = `${humanChoice} beats ${computerChoice}. You win!`;
        humanScore++;
    } else {
        result.textContent = `${computerChoice} beats ${humanChoice}. You lose.`;
        computerScore++;
    }
    score.textContent = `Your score: ${humanScore} || Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        playGame();
    }
}

function playGame() {
    if (humanScore > computerScore) {
        result.textContent = "You win the game!";
    } else {
        result.textContent = "You lose the game!";
    }
    humanScore = 0;
    computerScore = 0;
}

let buttonRock = document.querySelector(".Rock");
let buttonPaper = document.querySelector(".Paper");
let buttonScissors = document.querySelector(".Scissors");

buttonRock.addEventListener("click", () => playRound("Rock"));
buttonPaper.addEventListener("click", () => playRound("Paper"));
buttonScissors.addEventListener("click", () => playRound("Scissors"));
