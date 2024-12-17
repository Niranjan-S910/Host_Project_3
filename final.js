// Retrieve the statistics from localStorage
let gamesPlayed = localStorage.getItem('gamesPlayed') || 0;
let playerWins = localStorage.getItem('playerWins') || 0;
let computerWins = localStorage.getItem('computerWins') || 0;

// Display the retrieved stats on the webpage
document.getElementById('games-played').textContent = gamesPlayed;
document.getElementById('player-wins').textContent = playerWins;
document.getElementById('computer-wins').textContent = computerWins;

// Back to game button functionality
document.getElementById('back-to-game').addEventListener('click', () => {
  window.location.href = 'rock.html'; // Redirect back to the game page
});

// Reset stats button functionality
document.getElementById('reset-button').addEventListener('click', () => {
  // Reset localStorage values
  localStorage.setItem('gamesPlayed', 0);
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);

  // Update the displayed stats to 0
  document.getElementById('games-played').textContent = 0;
  document.getElementById('player-wins').textContent = 0;
  document.getElementById('computer-wins').textContent = 0;
});
