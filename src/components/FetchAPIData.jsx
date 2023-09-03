const MAX_POKEMON_ID = 1010;

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * max);
};

async function fetchAPIData(gameDifficulty, setGameData, setGameState) {
  let dataCollection = [];

  try {
    for (let i = 0; i < gameDifficulty; i++) {

      const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomInt(MAX_POKEMON_ID), {
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