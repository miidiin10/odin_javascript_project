function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

function playRound(playerSelection, computerSelection) {
   if(
       (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
       (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
       (playerSelection === 'Paper' && computerSelection === 'Rock')
     ) {
         playerScore++;
         return "You Win!"
     }

     if(
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
          playerScore++;
          return "You Lose!"
      }
    
      if (playerSelection === computerSelection) {
          return "It's a Tie"
      }

      playerSelection = "rock";
      computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));