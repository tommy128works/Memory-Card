import { useState } from "react";
import "../styles/MainMenu.css";
import Loader from "./Loader.jsx";
import fetchImages from "./fetchImages.js";

function MainMenu() {
  const [isLoading, setIsLoading] = useState(true);
  fetchImages(setIsLoading);

  if (isLoading === true) {
    return (
      <div id="main-menu">
        <Loader />
      </div>
    );
  }

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
