import "../styles/Header.css";
import pokeball from "../assets/pokeball_icon.png";

function Header() {
  return (
    <div id="header">
      <img src={pokeball} alt="pokeball icon" />

      <div>
        <span className="red-text">Pokémon </span>
        <span className="black-text">Memory</span>
      </div>
    </div>
  );
}

export default Header;
