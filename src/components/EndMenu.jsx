import "../styles/EndMenu.css";
import ScoreBoard from "./ScoreBoard.jsx";

function Message({ gameResult }) {
  if (gameResult === "win") {
    return <div>You win!</div>;
  } else if (gameResult === "lose") {
    return <div>You lose!</div>;
  }
}

function EndMenu({ gameResult, score, highScore }) {
  return (
    <>
      <ScoreBoard score={score} highScore={highScore} />
      <div id="end-menu">
        <Message gameResult={gameResult} />
        <button>PLAY AGAIN</button>
      </div>
    </>
  );
}

export default EndMenu;
