const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const endResult = document.querySelector("#endResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");



let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Listeners for choices
choiceBtns.forEach(button => button.addEventListener("click", () => {
  if (roundCount >= 10) {
    endResult.textContent = "Game over. Please reset the scores to play again.";
    resetBtn.style.display = 'block';
    return;
}

  player = button.textContent.trim().toUpperCase();
  computerTurn();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer}`;
  result = checkWinner();
  endResult.textContent = `Results: ${result}`;

  updateScore(result);
  roundCount++;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;

  if (roundCount >= 10) {
      endResult.textContent += " Game over. Please reset the scores to play again.";
      resetBtn.style.display = 'block';
  }
}));

//Computer choices
function computerTurn(){
  const randNum = Math.floor(Math.random() * 3);
  switch(randNum){
    case 0:
        computer = "ROCK";
        break;
    case 1:
        computer = "PAPER";
        break;
    case 2:
        computer = "SCISSORS";
        break;
  }
}


  // Checking winner
function checkWinner() {
    if (player === computer) {
        return "Draw!";
      } else if ((player === "ROCK" && computer === "SCISSORS") 
                (player === "PAPER" && computer === "ROCK")
                (player === "SCISSORS" && computer === "PAPER")) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}
 
function updateScore(result) {
  if (result === "You Win!") {
      playerScore++;
  } else if (result === "You Lose!") {
      computerScore++;
  }
}

// Reset
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    playerChoice.textContent = 'Player: ';
    computerChoice.textContent = 'Computer: ';
    endResult.textContent = 'Results: ';
    playerScoreDisplay.textContent = 'Player: 0';
    computerScoreDisplay.textContent = 'Computer: 0';
    resetBtn.style.display = 'none';
}