import "../styles/Gameboard.css";
import GameCard from "./GameCard.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

function Gameboard({ gameData }) {

  return (
    <>
      <ScoreBoard />
      <div id="gameboard">
        {gameData.map((card) => (
          <GameCard key={card.id} image={card.image} name={card.name} />
        ))}

      </div>
    </>
  );
}

export default Gameboard;
