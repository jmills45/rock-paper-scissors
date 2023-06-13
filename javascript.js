// Declare global variables
let playerScore = 0;
let computerScore = 0;
let gamesToPlay = 5;
let computerSelection = "";
let playerSelection = "";
let roundWinner = "";
let gameWinner = "";
let hand = [{"name": "rock", "hand": "✊"}, {"name": "paper", "hand": "✋"}, {"name": "scissors", "hand": "✌️"}]

// Result Messages
let winMessage = "You Win!";
let loseMessage = "You Lose!";
let tieMessage = "It was a tie!";

// Define DOM elements
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissors");
const playerScoreBoard = document.querySelector(".playerScore");
const computerScoreBoard = document.querySelector(".computerScore");
const roundResult = document.querySelector(".result");
const playerChoice = document.querySelector(".playerChoiceHand");
const computerChoice = document.querySelector(".computerChoiceHand");
const startButton = document.querySelector(".startButton");
const startScreen = document.querySelector(".start");
const gameScreen = document.querySelector(".container");
const restartButton = document.querySelector(".restartButton");

// Define EventListners
rockButton.addEventListener("click", onClick);
paperButton.addEventListener("click", onClick);
scissorButton.addEventListener("click", onClick);
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);

function startGame(){
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    computerSelection = "";
    playerSelection = "";
    roundWinner = "";
    gameWinner = "";

    roundResult.textContent = "5 Points Wins";
    playerScoreBoard.textContent = 0;
    computerScoreBoard.textContent = 0;
    playerChoice.textContent = "";
    computerChoice.textContent = "";

    paperButton.style.display = "block";
    rockButton.style.display = "block";
    scissorButton.style.display = "block";
    restartButton.style.display = "none";;
}

// grabs player selection from click EventListener callback
function getPlayerInput(e) {
    return e.target.classList.value;
}

// Randomly assigns the computer either rock, paper, or scissors
function getComputerInput() {
    randomNumber = getRandomNumber(1, 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else
        return "scissors";
}

// Generates a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;   
}

function updatePoints(winner) { 
    switch(winner) {
        case("tie"):
            break;
        case("player"):
            playerScore += 1;
            break;
        case("computer"):
            computerScore += 1;
            break;
    }
}

// Update UI Elements
function updateUI(winner, player, computer){

    playerChoice.textContent = hand.find(item => item.name === playerSelection).hand;
    computerChoice.textContent = hand.find(item => item.name === computerSelection).hand;

    if (gameWinner === "Player" || gameWinner === "Computer") {
        paperButton.style.display = "none";
        rockButton.style.display = "none";
        scissorButton.style.display = "none";
        restartButton.style.display = "block";;
    }

    switch(winner) {
        case("tie"):
            roundResult.textContent = tieMessage;
            break;
        case("player"):
            playerScoreBoard.textContent = playerScore;
            roundResult.textContent = winMessage;
            break;
        case("computer"):
            computerScoreBoard.textContent = computerScore;
            roundResult.textContent = loseMessage;
            break;
    }
}

// Determine the winner of the game
function decideWinner(player, computer){
    if (player < gamesToPlay && computer < gamesToPlay) return;

    if (player === gamesToPlay){
        gameWinner = "Player";
        roundResult.textContent = `Game Over!  ${gameWinner} Wins!`;
        updateUI();
    } else if (computer === gamesToPlay){
        gameWinner = "Computer";
        roundResult.textContent = `Game Over  ${gameWinner} Wins!`;
        updateUI();
    }
}

// Start game functions on click
function onClick(e) {
    if (gameWinner !== "") return;

    playerSelection = getPlayerInput(e);
    computerSelection = getComputerInput();
    roundWinner = playRound(playerSelection, computerSelection);
    updatePoints(roundWinner); 
    updateUI(roundWinner, playerSelection, computerSelection); 
    decideWinner(playerScore, computerScore);
}

// Plays one round of rock, paper, scissors.
function playRound(player, computer) { 

    let winner = "";

    switch (player) {
        case ("rock"):
            if (computer === "paper"){
                winner = "computer";
            } else if (computer === "scissors") {
                winner = "player";
            } else {
                winner = "tie";
            }
            break;    
        case ("paper"):
            if (computer === "scissors"){
                winner = "computer";
            } else if (computer === "rock") {
                winner = "player";
            } else {
                winner = "tie";
            }
            break;
        case ("scissors"):
            if (computer === "rock"){
                winner = "computer";
            } else if (computer === "paper") {
                winner = "player";
            } else {
                winner = "tie";
            }
            break;
    }
    return winner;
}







