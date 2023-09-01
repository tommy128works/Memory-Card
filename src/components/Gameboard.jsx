import "../styles/Gameboard.css";
import GameCard from "./GameCard.jsx";

function Gameboard() {

  const cards = [];
  for (let i = 0; i < 16; i ++) {
    cards.push(<GameCard />);
  }

  return (
    <div id="gameboard" >
      {cards}
      {/* <GameCard /> */}
      
    </div>
  )
}

export default Gameboard;