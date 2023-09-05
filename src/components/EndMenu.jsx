import "../styles/EndMenu.css";
import resetGame from "./resetGame.js";

function Message({ gameResult }) {
  if (gameResult === "win") {
    return <div>You win!</div>;
  } else if (gameResult === "lose") {
    return <div>You lose!</div>;
  }
}

function EndMenu({
  gameResult,
  setGameState,
  setGameDifficulty,
  setScore,
  setCurrentRound,
}) {
  return (
    <>
      <div id="end-menu">
        <Message gameResult={gameResult} />
        <button
          onClick={() =>
            resetGame(
              setGameState,
              setGameDifficulty,
              setScore,
              setCurrentRound
            )
          }
        >
          PLAY AGAIN
        </button>
      </div>
    </>
  );
}

export default EndMenu;
