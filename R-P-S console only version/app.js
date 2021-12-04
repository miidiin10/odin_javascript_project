function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
} 
let playerScore = 0;
let computerScore = 0;
let roundWinner = '' ;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
          return 'You Win!';
        } else if (computerSelection == 'paper') {
          return 'You Lost!';
        } else {
          return "It's a Tie";
        } 
      }
      if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
          return 'You Win!';
        } else if (computerSelection == 'scissors') {
          return 'You Lost!';
        } else {
          return "It's a Tie";
        } 
      }
      if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
          return 'You Lost!';
        } else if (computerSelection == 'paper') {
          return 'You Win!';
        } else {
          return "It's a Tie";
        } 
      }
}

function game() {
    playRound(playerSelection, computerSelection);
    console.log();
}