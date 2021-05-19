let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random()*9);
};
let targetNumber = generateTarget ();

const compareGuesses = (human, computer, targetNumber) => {
  let humanDifference = Math.abs(targetNumber - human);
  let computerDifference = Math.abs(targetNumber - computer);
if (humanDifference>computerDifference || humanDifference === computerDifference) {
  return true;
} else if (humanDifference < computerDifference) {
  return false;
}
};

let winner = compareGuesses === true ? 'human' : 'computer';

function updateScore (winner) {
  if (winner === 'human'){
    humanScore ++;
  } else if (winner === 'computer'){
    computerScore ++;
  }; 
}

function advanceRound () {
  currentRoundNumber += 1;
}

