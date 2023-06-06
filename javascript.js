// Declare global variables
let gamesToPlay = 5;
let playerScore = 0;
let computerScore = 0;

// Prompts the player for input and then converts all characters to lowercase
function playerInput () {
    let rawInput = prompt("Please choose rock, paper, or scissors");
    cleanInput = rawInput.toLowerCase();
    return cleanInput;
}

// Randomly assigns the computer either rock, paper, or scissors
function computerInput() {
    randomNumber = randomChoice(1, 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else
        return "scissors";
}

// Generates a random number between min and max
function randomChoice(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;   
}

// Plays one round of rock, paper, scissors. Round is decided based on
// The two arguments passed to the fuction.
function playRound(player, computer) {
    switch (player) {
        // All possible results if player chose rock
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
        // All possible results if player chooses scissors
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
        // All possible results if player chooses rock
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
// Decides the winner of the game by comparing playerFinalScore and computerFinalScore
function decideWinner(playerFinalScore, computerFinalScore) {
    if (playerFinalScore > computerFinalScore){
        return "You Won!";
    } else if (playerFinalScore < computerFinalScore) {
        return "You Lost!";
    } else {
        return "It was a tie!"
    }
}

// Loop that plays the game. Player and Computer selection are freshed with each pass.
// Points are totaled after each round and a winner is decided at the end of X rounds.
for (i = gamesToPlay; i > 0; i--) {

    let playerSelection = playerInput();
    let computerSelection = computerInput();

    roundWinner = playRound(playerSelection, computerSelection)

    console.log(`The Player choose ${playerSelection}`)
    console.log(roundWinner);
}

// Report finall score of each player and then report the winner.
console.log(playerScore);
console.log(computerScore);

console.log(decideWinner(playerScore, computerScore));





