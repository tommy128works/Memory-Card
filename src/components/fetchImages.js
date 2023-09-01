import { useState, useEffect } from "react";

async function fetchImages(stateSetter) {
  function setFalse() {
    stateSetter(false);
  }

  try {
    // setTimeout(logResponse, 5000);

    // const response = await setTimeout(logResponse, 5000);

    // setTimeout(logResponse, 5000);

    setTimeout(setFalse, 5000);

    // const fetchData = async () => {
    //   const response = await fetch();
    //   const data = await response.json();
    //   console.log(data);
    // }
  } catch (error) {
    console.log(error);
  }
}

export default fetchImages;
