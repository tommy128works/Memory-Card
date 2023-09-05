import "../styles/Header.css";
import pokeball from "../assets/pokeball_icon.png";
import resetGame from "./resetGame.js";

function Header({
  setGameState,
  setGameDifficulty,
  setScore,
  setCurrentRound,
}) {
  return (
    <header
      id="header"
      onClick={() =>
        resetGame(setGameState, setGameDifficulty, setScore, setCurrentRound)
      }
    >
      <img src={pokeball} alt="pokeball icon" />

      <div>
        <span className="red-text">Pokémon </span>
        <span className="black-text">Memory</span>
      </div>
    </header>
  );
}

export default Header;
