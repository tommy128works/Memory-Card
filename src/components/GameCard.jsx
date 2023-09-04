import "../styles/GameCard.css";

function GameCard({
  id,
  image,
  name,
  cardTracker,
  setCardTracker,
  score,
  setScore,
  highScore,
  setHighScore,
}) {

  const checkCard = (event) => {
    let tempCard = event.target.getAttribute("data-id");

    if (cardTracker.includes(tempCard)) {
      // GAME OVER! MUAHAHAHAH
    } else {
      setScore(score + 1);
      setCardTracker([...cardTracker, tempCard])

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }

  };

  return (
    <div
      data-id={id}
      className="game-card"
      onClick={(event) => checkCard(event)}
    >
      <img src={image} />
      <div>{name}</div>
    </div>
  );
}

export default GameCard;
