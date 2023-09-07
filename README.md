# Pokémon Memory

![Screenshot of the App Overview](/src/assets/screenshots/Memory_Card_Showcase.png)

[View DEMO Here!](https://thunderous-basbousa-953184.netlify.app/)

## Project Description

Gain points by clicking each card only once!

Asynchronous code was implemented with Async/Await to fetch data from the [RESTful Pokémon API](https://pokeapi.co/) which is used to create each pokemon card.

This web application was built using React. Props and states were abundantly used to share data across React components. The React useEffect hook was invoked to fetch API data whenever the user selected a game mode difficulty on the main menu.

Technologies Used:
- React
- JavaScript
- CSS
- API

Notable Coding Techniques Used:
- Async/Await
- Fetch API
- React Hooks: setState, useEffect
- React Props
- JavaScript EventListeners

## How to Run Project Locally

To run this project on your own computer, please fork the repository, then run the following commands in your command line:
```
npm install
npm run dev
```

Then enter the indicated address into your browser!
For example, "http://localhost:5173/".

Otherwise, please check out the [DEMO here!](https://thunderous-basbousa-953184.netlify.app/)

## How to Use the Project

Select a game mode difficulty on the main menu.

Wait for the pokemon cards to be loaded.

Select each pokemon card once to gain a point. Careful! These cards will randomly swap locations after each round!

You win when you have clicked all available cards once. Afterwards, you can challenge yourself to the harder difficulties.

## Credits

[This project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) is from The Odin Project's [Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) course.

[Background image](https://rare-gallery.com/4548246-pokmon-pixel-art.html#)

[Pokeball icon in header](https://www.pixilart.com/draw/pokeball-16x16-6e9c13b725562f5#)

[Pikachu loader icon](https://icons8.com/icon/pl6INoeF7wo2/pikachu-pokemon)