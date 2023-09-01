import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

import fetchImages from "./components/fetchImages.js";

function App() {
  // const [gameState, setGameState] = useState("main-menu");
  // const [gameState, setGameState] = useState("loading");
  const [gameState, setGameState] = useState("gameplay");

  // const [isLoading, setIsLoading] = useState(true);
  // fetchImages(setIsLoading);

  // if (isLoading === true) {
  //   return (
  //     <div id="main-menu">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <>
      <div id="content-container">
        <Header />
        <Content gameState={gameState} />
      </div>

      <Footer />
    </>
  );
}

export default App;
