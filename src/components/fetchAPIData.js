import { useState, useEffect } from "react";

async function fetchAPIData(setGameData, setGameState) {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/", {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default fetchAPIData;
