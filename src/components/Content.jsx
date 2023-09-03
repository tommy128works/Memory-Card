import { useState, useEffect } from "react";

import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";
import fetchAPIData from "./fetchAPIData.js";

function Content() {
  const [gameState, setGameState] = useState("main-menu");
  // for testing only
  // const [gameState, setGameState] = useState("loading");
  // const [gameState, setGameState] = useState("gameplay");

  const [gameDifficulty, setGameDifficulty] = useState(null);

  const [gameData, setGameData] = useState(null);

  if (gameState === "main-menu") {
    return (
      <MainMenu
        setGameDifficulty={setGameDifficulty}
        setGameState={setGameState}
      />
    );
  } else if (gameState === "loading") {
    // useEffect(() => {
    //   fetchAPIData(gameDifficulty, setGameData, setGameState);
    // }, []);

    fetchAPIData(gameDifficulty, setGameData, setGameState);

    return <Loader />;
  } else if (gameState === "gameplay") {
    return <Gameboard />;
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
