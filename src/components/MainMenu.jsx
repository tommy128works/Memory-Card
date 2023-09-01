import { useState } from "react";
import "../styles/MainMenu.css";

function MainMenu() {
  return (
    <div id="main-menu">
      <div id="main-menu-modal">
        <div id="main-menu-modal-content">
          <div id="main-menu-title">
            Gain points by clicking each card only once!
          </div>

          <div id="main-menu-buttons-container">
            <button id="main-menu-easy-button">Easy</button>
            <button id="main-menu-medium-button">Medium</button>
            <button id="main-menu-hard-button">Hard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
