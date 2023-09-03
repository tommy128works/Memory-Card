import { useState } from "react";

import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";
import FetchAPIData from "./FetchAPIData.jsx";

function Content() {
  const [gameState, setGameState] = useState("main-menu");
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);

  // useEffect(() => {
  //   fetchAPIData(gameDifficulty, setGameData, setGameState);
  // }, []);

  if (gameState === "main-menu") {
    return (
      <MainMenu
        setGameDifficulty={setGameDifficulty}
        setGameState={setGameState}
      />
    );
  } else if (gameState === "loading") {
    FetchAPIData(gameDifficulty, setGameData, setGameState);
    return <Loader />;
  } else if (gameState === "gameplay") {
    return <Gameboard gameData={gameData} />;
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
