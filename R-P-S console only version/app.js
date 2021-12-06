function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber].toLowerCase();
} 

function playerPlay() {
  
} 


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
  
  const playerSelection = prompt("input 'Rock', 'Paper' or 'Scissors'").toLowerCase();
  const computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);
  
  console.log(roundResult);
  
}

game();
game();
game();
game();
game();

function gameScore() {
  let result = playRound();
  let playerScore = 0;
  let computerScore = 0;

  if (result === "You win!") {
    playerScore++;
  } else if (result === "You Lost!") {
    computerScore++;
  }

  if (playerScore > computerScore) {
    console.log('playerWin');
    return;
  }
  if (computerScore > playerScore) {
    console.log('computerWin');
    return;
  }
}


