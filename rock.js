const choices = document.querySelectorAll('.choice');
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart');

let playerChoice = '';
let computerChoice = '';
let winner = '';

// Retrieve stats from localStorage or initialize them if they don't exist
let gamesPlayed = localStorage.getItem('gamesPlayed') || 0;
let playerWins = localStorage.getItem('playerWins') || 0;
let computerWins = localStorage.getItem('computerWins') || 0;

// Update localStorage with the new stats
const updateStats = () => {
  localStorage.setItem('gamesPlayed', gamesPlayed);
  localStorage.setItem('playerWins', playerWins);
  localStorage.setItem('computerWins', computerWins);
};

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

const determineWinner = (player, computer) => {
  if (player === computer) return 'It\'s a Tie!';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    playerWins++; // Increment player wins
    return 'You Win!';
  }
  computerWins++; // Increment computer wins
  return 'Computer Wins!';
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playerChoice = choice.getAttribute('data-choice');
    computerChoice = getComputerChoice();
    winner = determineWinner(playerChoice, computerChoice);

    playerChoiceText.textContent = `Your choice: ${playerChoice}`;
    computerChoiceText.textContent = `Computer's choice: ${computerChoice}`;
    winnerText.textContent = `Winner: ${winner}`;

    gamesPlayed++; // Increment games played
    updateStats(); // Update the stats in localStorage
  });
});

restartButton.addEventListener('click', () => {
  playerChoiceText.textContent = 'Your choice: ';
  computerChoiceText.textContent = 'Computer\'s choice: ';
  winnerText.textContent = 'Winner: ';
});
document.getElementById('results').addEventListener('click', () => {
    window.location.href = 'final.html'; // Redirect to final.html
  });