import "../styles/Loader.css";
import pikachu from "../assets/pikachu-icon.png";

function Loader() {
  return <img id="loader" src={pikachu} className="rotate" />;
}

export default Loader;
