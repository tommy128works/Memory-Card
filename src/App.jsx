import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainMenu from "./components/MainMenu.jsx";

function App() {
  return (
    <>
      <div id="content-container">
        <Header />
        <MainMenu />
      </div>

      <Footer />
    </>
  );
}

export default App;
