import "../styles/ScoreBoard.css";

function ScoreBoard({ score, highScore }) {
  return (
    <div id="score-board">
      <div>High Score: {highScore}</div>
      <div>Score: {score} </div>
      <div>Round 0/5</div>
    </div>
  );
}

export default ScoreBoard;
