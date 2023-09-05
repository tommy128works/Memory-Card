import { useState } from "react";

import "../styles/Gameboard.css";
import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

function Gameboard({ gameData, setGameData, gameDifficulty, setGameState, score, setScore, highScore, setHighScore }) {

  const [cardTracker, setCardTracker] = useState([]);

  return (
    <>
      <ScoreBoard score={score} highScore={highScore} />
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
          />
        ))}
      </div>
    </>
  );
}

export default Gameboard;
