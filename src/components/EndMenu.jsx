import "../styles/EndMenu.css";

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
      <div id="end-menu">
        <Message gameResult={gameResult} />
        <button>PLAY AGAIN</button>
      </div>
    </>
  );
}

export default EndMenu;
