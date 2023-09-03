import { useEffect } from "react";

const MAX_POKEMON_ID = 1010;

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * max);
};

async function fetchAPIData(gameDifficulty, setGameData, setGameState) {
  let dataCollection = [];
  let tempURL = "";

  try {
    for (let i = 0; i < gameDifficulty; i++) {
      tempURL =
        "https://pokeapi.co/api/v2/pokemon/" + getRandomInt(MAX_POKEMON_ID);

      const response = await fetch(tempURL, {
        mode: "cors",
      });
      const data = await response.json();

      dataCollection.push({
        image: data.sprites.front_default,
        name: data.name,
      });
    }
    setGameData(dataCollection);
    setGameState("gameplay");

    // for testing only
    console.log(dataCollection);
  } catch (error) {
    console.log(error);
  }
}

export default fetchAPIData;
