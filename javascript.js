let gamesToPlay = 5;
let playerScore = 0;
let computerScore = 0;

function playerInput () {
    let rawInput = prompt("Please choose rock, paper, or scissors");
    cleanInput = rawInput.toLowerCase();
    return cleanInput;
}

function computerInput() {
    randomNumber = randomChoice(1, 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else
        return "scissors";
}

function randomChoice(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;   
}

function playRound(player, computer) {
    switch (player) {
        case ("rock"):
            if (computer === "paper"){
                computerScore = computerScore + 1;
                return "The computer choose paper. You Lose this round."
            } else if (computer === "scissors") {
                playerScore = playerScore + 1;
                return "The computer choose scissors. You Win this round."
            } else {
                return "The computer choose rock. Its a Tie this round."
            }
        
        case ("paper"):
            if (computer === "scissors"){
                computerScore = computerScore + 1;
                return "The computer choose scissors. You Lose this round."
            } else if (computer === "rock") {
                playerScore = playerScore + 1;
                return "The computer choose rock. You Win this round."
            } else {
                return "The computer choose paper. Its a Tie this round."
            }

        case ("scissors"):
            if (computer === "rock"){
                computerScore = computerScore + 1;
                return "The computer choose rock. You Lose this round."
            } else if (computer === "paper") {
                playerScore = playerScore + 1;
                return "The computer choose paper. You Win this round."
            } else {
                return "The computer choose scissors. Its a Tie this round."
            }
    }
}

function decideWinner(playerFinalScore, computerFinalScore) {
    if (playerFinalScore > computerFinalScore){
        return "You Won!";
    } else if (playerFinalScore < computerFinalScore) {
        return "You Lost!";
    } else {
        return "It was a tie!"
    }
}

for (i = gamesToPlay; i > 0; i--) {

    let playerSelection = playerInput();
    let computerSelection = computerInput();

    roundWinner = playRound(playerSelection, computerSelection)

    console.log(`The Player choose ${playerSelection}`)
    console.log(`The Computer choose ${computerSelection}`)
    console.log(roundWinner);
}

console.log(playerScore);
console.log(computerScore);

console.log(decideWinner(playerScore, computerScore));





