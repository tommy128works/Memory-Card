import MainMenu from "./MainMenu.jsx";
import Loader from "./Loader.jsx";
import Gameboard from "./Gameboard.jsx";

function Content({ gameState }) {
  if (gameState === "main-menu") {
    return <MainMenu />;
  } else if (gameState === "loading") {
    return <Loader />;
  } else if (gameState === "gameplay") {
    return <Gameboard />;
  } else {
    return <div>Unknown error</div>;
  }
}

export default Content;
