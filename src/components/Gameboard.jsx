import { useState } from "react";

import "../styles/Gameboard.css";
import GameCard from "./GameCard.jsx";

function Gameboard({
  gameData,
  setGameData,
  gameDifficulty,
  setGameState,
  score,
  setScore,
  highScore,
  setHighScore,
  currentRound,
  setCurrentRound,
}) {
  const [cardTracker, setCardTracker] = useState([]);

  return (
    <>
      <div id="gameboard">
        {gameData.map((card) => (
          <GameCard
            key={card.id}
            id={card.id}
            image={card.image}
            name={card.name}
            cardTracker={cardTracker}
            setCardTracker={setCardTracker}
            score={score}
            setScore={setScore}
            highScore={highScore}
            setHighScore={setHighScore}
            gameData={gameData}
            setGameData={setGameData}
            gameDifficulty={gameDifficulty}
            setGameState={setGameState}
            currentRound={currentRound}
            setCurrentRound={setCurrentRound}
          />
        ))}
      </div>
    </>
  );
}

export default Gameboard;
