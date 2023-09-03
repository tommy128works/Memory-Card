// import { useState } from "react";
import "../styles/MainMenu.css";

const EASY_DIFFICULTY = 4;
const MEDIUM_DIFFICULTY = 8;
const HARD_DIFFICULTY = 16;

function MainMenu({ setGameDifficulty, setGameState }) {
  const startGame = (int) => {
    setGameDifficulty(int);
    setGameState("loading");
  };

  return (
    <div id="main-menu">
      <div id="main-menu-modal">
        <div id="main-menu-modal-content">
          <div id="main-menu-title">
            Gain points by clicking each card only once!
          </div>

          <div id="main-menu-buttons-container">
            <button
              id="main-menu-easy-button"
              onClick={() => startGame(EASY_DIFFICULTY)}
            >
              Easy
            </button>
            <button
              id="main-menu-medium-button"
              onClick={() => startGame(MEDIUM_DIFFICULTY)}
            >
              Medium
            </button>
            <button
              id="main-menu-hard-button"
              onClick={() => startGame(HARD_DIFFICULTY)}
            >
              Hard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
