import { useState, useEffect } from "react";

import Header from "./Header.jsx";
import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";
import fetchAPIData from "./fetchAPIData.js";
import EndMenu from "./EndMenu.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

function Content() {
  const [gameState, setGameState] = useState("main-menu");
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  useEffect(() => {
    if (gameDifficulty === "reset") {
      return;
    }

    fetchAPIData(gameDifficulty, setGameData, setGameState);
  }, [gameDifficulty]);

  if (gameState === "main-menu") {
    return (
      <>
        <Header
          setGameState={setGameState}
          setGameDifficulty={setGameDifficulty}
          setScore={setScore}
          setCurrentRound={setCurrentRound}
        />
        <MainMenu
          setGameDifficulty={setGameDifficulty}
          setGameState={setGameState}
        />
      </>
    );
  } else if (gameState === "loading") {
    return (
      <>
        <Header
          setGameState={setGameState}
          setGameDifficulty={setGameDifficulty}
          setScore={setScore}
          setCurrentRound={setCurrentRound}
        />
        <Loader />
      </>
    );
  } else if (gameState === "gameplay") {
    return (
      <>
        <Header
          setGameState={setGameState}
          setGameDifficulty={setGameDifficulty}
          setScore={setScore}
          setCurrentRound={setCurrentRound}
        />
        <ScoreBoard
          score={score}
          highScore={highScore}
          currentRound={currentRound}
          gameDifficulty={gameDifficulty}
        />
        <Gameboard
          gameData={gameData}
          setGameData={setGameData}
          gameDifficulty={gameDifficulty}
          setGameState={setGameState}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
        />
      </>
    );
  } else if (gameState === "lose" || gameState === "win") {
    return (
      <>
        <Header
          setGameState={setGameState}
          setGameDifficulty={setGameDifficulty}
          setScore={setScore}
          setCurrentRound={setCurrentRound}
        />
        <ScoreBoard
          score={score}
          highScore={highScore}
          currentRound={currentRound}
          gameDifficulty={gameDifficulty}
        />
        <EndMenu
          gameResult={gameState}
          score={score}
          highScore={highScore}
          setGameState={setGameState}
          setGameDifficulty={setGameDifficulty}
          setScore={setScore}
          setCurrentRound={setCurrentRound}
        />
      </>
    );
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
