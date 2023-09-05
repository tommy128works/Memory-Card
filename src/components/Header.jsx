import "../styles/Header.css";
import pokeball from "../assets/pokeball_icon.png";
import resetGame from "./resetGame.js";

function Header() {
  return (
    <header id="header">
      <img src={pokeball} alt="pokeball icon" />

      <div>
        <span className="red-text">Pokémon </span>
        <span className="black-text">Memory</span>
      </div>
    </header>
  );
}

export default Header;
