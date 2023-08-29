import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div id="content-container">
        <Header />
      </div>

      <Footer />
    </>
  );
}

export default App;
