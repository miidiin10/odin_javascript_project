function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
   if(
       (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
       (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
       (playerSelection === 'Paper' && computerSelection === 'Rock')
     ) {
         playerScore++;
         return "You Win!";
     }

     if(
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
          playerScore++;
          return "You Lose!";
      }
    
      if (playerSelection === computerSelection) {
          return "It's a Tie";
      }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));