const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const endResult = document.querySelector("#endResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");
const playerScoreDisplay = document.querySelector("#playerChoice");
const computerScoreDisplay = document.querySelector("#computerChoice");



let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Display when players play
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
  } else if (computer === "ROCK") {
      return (player === "PAPER") ? "You Win!" : "You Lose!";
  } else if (computer === "PAPER") {
      return (player === "SCISSORS") ? "You Win!" : "You Lose!";
  } else if (computer === "SCISSORS") {
      return (player === "ROCK") ? "You Win!" : "You Lose!";
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