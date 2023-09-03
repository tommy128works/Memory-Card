import "../styles/GameCard.css";

function GameCard({ image, name }) {
  return (
    <div className="game-card">
      <img src={image} />
      <div>{name}</div>
    </div>
  );
}

export default GameCard;
