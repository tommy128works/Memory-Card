import { useState, useEffect } from "react";

import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";
import fetchAPIData from "./fetchAPIData.js";
import EndMenu from "./EndMenu.jsx";

function Content() {
  const [gameState, setGameState] = useState("main-menu");
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetchAPIData(gameDifficulty, setGameData, setGameState);
  }, [gameDifficulty]);

  if (gameState === "main-menu") {
    return (
      <MainMenu
        setGameDifficulty={setGameDifficulty}
        setGameState={setGameState}
      />
    );
  } else if (gameState === "loading") {
    return <Loader />;
  } else if (gameState === "gameplay") {
    return (
      <Gameboard
        gameData={gameData}
        setGameData={setGameData}
        gameDifficulty={gameDifficulty}
        setGameState={setGameState}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    );
  } else if (gameState === "lose" || gameState === "win") {
    return <EndMenu gameResult={gameState} score={score} highScore={highScore} />;
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
