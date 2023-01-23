let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if ((humanGuess < 0) || (humanGuess >= 10)){
        alert("Please make sure your guess is between 0 and 9")
    }
    const humanDiff = Math.abs(targetGuess - humanGuess)
    const computerDiff = Math.abs(targetGuess - computerGuess)
    return humanDiff <= computerDiff ? true :false ;
  
}

const updateScore = winner => {
  return winner ==="human"?humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++;
