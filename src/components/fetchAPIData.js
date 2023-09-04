const MAX_POKEMON_ID = 1010;

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * max);
};

const formatName = (string) => {
  let firstLetter = string.slice(0, 1);
  let result = firstLetter.toUpperCase() + string.slice(1);

  if (result.length > 10) {
    result = result.slice(0, 10) + "...";
  }

  return result;
};

async function fetchAPIData(gameDifficulty, setGameData, setGameState) {
  let dataCollection = [];
  let usedNumbers = [];

  let tempInt = 0;

  if (gameDifficulty !== null) {
    try {
      for (let i = 0; i < gameDifficulty; i++) {
        do {
          tempInt = getRandomInt(MAX_POKEMON_ID);
        } while (usedNumbers.includes(tempInt));
        usedNumbers.push(tempInt);

        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + tempInt,
          {
            mode: "cors",
          }
        );
        const data = await response.json();

        dataCollection.push({
          image: data.sprites.front_default,
          name: formatName(data.name),
          id: i,
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
}

export default fetchAPIData;
