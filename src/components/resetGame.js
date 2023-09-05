function resetGame(setGameState, setGameDifficulty, setScore, setCurrentRound) {
  setGameState("main-menu");
  setGameDifficulty("reset");
  setScore(0);
  setCurrentRound(1);
}

export default resetGame;
