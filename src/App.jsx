import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainMenu from "./components/MainMenu.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {
  return (
    <>
      <div id="content-container">
        <Header />
        {/* <MainMenu /> */}
        {/* <ScoreBoard /> */}

        <Gameboard />
      </div>

      <Footer />
    </>
  );
}

export default App;
