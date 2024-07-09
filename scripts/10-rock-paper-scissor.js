let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  }; // retrives score and converts it back to an object. If score does not exist, give it default values. 

updateScoreElement();

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove ='';
  if (randomNumber >= 0 && randomNumber <= 1/3){
    computerMove ='rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove ='paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove ='scissor';
  }
  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === "scissor"){
     if (computerMove === 'rock'){
    result = 'You Lose.';
    } else if (computerMove === 'paper'){
      result = 'You Win!';
    } else if (computerMove == 'scissor'){
      result = 'Tie...';
    }

  } else if (playerMove === 'paper'){
    if (computerMove === 'rock'){
      result = 'You Win!';
    } else if (computerMove === 'paper'){
      result = 'Tie...';
    } else if (computerMove == 'scissor'){
      result = 'You Lose.';
    } 

 } else if (playerMove == 'rock'){
  if (computerMove === 'rock'){
    result = 'Tie...';
  } else if (computerMove === 'paper'){
    result = 'You Lose.';
  } else if (computerMove == 'scissor'){
    result = 'You Win!';
  }
 }
 
 if (result === 'You Win!'){
  score.wins++;
 } else if (result === 'You Lose.'){
  score.losses++;
 } else if (result === 'Tie...'){
  score.ties++;
 }

 localStorage.setItem('score', JSON.stringify(score)); // saves the score even when you refresh the page. Only supports strings so need to convert it to JSON. 

 updateScoreElement();

 document.querySelector('.js-result')
  .innerHTML = result;

 document.querySelector('.js-moves')
  .innerHTML = ` You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
  
} 

function updateScoreElement(){
  document.querySelector('.js-score') // displayes score on webpage now instead of an alert only 
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;  
}  