import "../styles/GameCard.css";

const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
  array.sort(() => Math.random() - 0.5);
  return array.sort(() => Math.random() - 0.5);
}

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
  gameData,
  setGameData
}) {
  const checkCard = (event) => {
    let tempCard = event.target.getAttribute("data-id");

    if (cardTracker.includes(tempCard)) {
      // GAME OVER! MUAHAHAHAH
    } else {
      setScore(score + 1);
      setCardTracker([...cardTracker, tempCard]);

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }

      setGameData(shuffleArray(gameData));

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
