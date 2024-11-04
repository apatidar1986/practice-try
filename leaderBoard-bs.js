/**
 * 
Leaderboard Update:
In a multiplayer game, players’ scores are shown on a leaderboard that ranks them in real 
time. Every time a player finishes a round, their score updates, and the leaderboard needs to 
reflect these changes instantly. Since the list is relatively small but gets frequent score 
updates, what sorting approach will ensure quick reordering without unnecessary 
computation?
 */
function updateLeaderboard(leaderboard, updatedPlayer) {
  // Remove the player with the same id from the leaderboard, if exists
  let indexToRemove = leaderboard.findIndex(
    (player) => player.id === updatedPlayer.id
  );
  if (indexToRemove !== -1) {
    leaderboard.splice(indexToRemove, 1);
  }

  // Binary search to find the correct position for the updated score
  let left = 0;
  let right = leaderboard.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (leaderboard[mid].score === updatedPlayer.score) {
      left = mid;
      break;
    } else if (leaderboard[mid].score < updatedPlayer.score) {
      right = mid - 1; // will flip if score needed in ascending/descending order
    } else {
      left = mid + 1;
    }
  }

  // Insert the updated player at the correct position
  leaderboard.splice(left, 0, updatedPlayer);
}

// Example usage:
let leaderboard = [
  { id: 1, name: "Player 1", score: 500 },
  { id: 2, name: "Player 2", score: 300 },
  { id: 3, name: "Player 3", score: 100 },
];

let updatedPlayer = { id: 2, name: "Player 2", score: 600 };

updateLeaderboard(leaderboard, updatedPlayer);
console.log(leaderboard);
