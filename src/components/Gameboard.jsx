import { useState } from "react";

import "../styles/Gameboard.css";
import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

function Gameboard({ gameData, setGameData }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
          />
        ))}
      </div>
    </>
  );
}

export default Gameboard;
