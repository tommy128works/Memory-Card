import { useState, useEffect } from "react";

import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";
import fetchAPIData from "./fetchAPIData.js";

function Content() {
  const [gameState, setGameState] = useState("main-menu");
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);

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
    return <Gameboard gameData={gameData} />;
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
