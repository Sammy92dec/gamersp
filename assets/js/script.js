const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const endResult = document.querySelector("#endResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");



let player;
let computer;
let result;
let playerScore = 0;

// Display when players play
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `Player: ${player}`;
    computerChoice.textContent = `Computer: ${computer}`;
    endResult.textContent = checkWinner();
}));

//Computer choices
function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }}

    //When playing
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    ;}
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    ;}
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    ;}
}
  