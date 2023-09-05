import "../styles/ScoreBoard.css";

function ScoreBoard({ score, highScore, currentRound, gameDifficulty }) {
  return (
    <div id="score-board">
      <div>High Score: {highScore}</div>
      <div>Score: {score} </div>
      <div>
        Round {currentRound}/{gameDifficulty}
      </div>
    </div>
  );
}

export default ScoreBoard;
