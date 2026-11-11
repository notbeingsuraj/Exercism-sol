export function createScoreBoard() {
 return {
    "The Best Ever": 1000000,
  }
}

export function addPlayer(existingScoreBoard, nameOfPlayer, playerScore) {
  existingScoreBoard[nameOfPlayer] = playerScore;
  return existingScoreBoard;
}

export function removePlayer(existingScoreBoard,nameOfPlayer){
  delete existingScoreBoard[nameOfPlayer];
  return existingScoreBoard;
}

export function updateScore(existingScoreBoard, nameOfPlayer, newScore){
  existingScoreBoard[nameOfPlayer] += newScore;
  return existingScoreBoard;
}

export function applyMondayBonus(existingScoreBoard) {
  for (const player in existingScoreBoard) {
    existingScoreBoard[player] += 100;
  }

  return existingScoreBoard;
}