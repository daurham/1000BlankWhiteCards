# 1000BlankWhiteCards
#### Tech Stack:
![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB "React.js") ![Socket.io](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white "Socket.io") ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white "NodeJS") ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white "Express") ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white "MySQL") ![BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white "Bootstrap") ![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white "MaterialUI") ![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white "StyledComponents")


## About The Project
- This application is intended for lovers of the game 1000 Blank White Cards. 
- Rules on how to play are inside.
- Requires 4 players.
- Simulates the real game.

### How to use:
- To use this application, first fork and clone this repo (the client) and our [microservices](https://github.com/blueocean-pikachus/1000BlankWhiteCardsMicroservice) repo (the server).
- In both repos, type "npm install".

### Client:
- Type "npm start".
- Type "npm run server".
- Have fun with 4 friends locally.
- (Optional: Deploy to play with friends online.)

### Server: 
- Follow this [ReadMe](https://github.com/blueocean-pikachus/1000BlankWhiteCardsMicroservice#readme).

### Navigating The App:

#### Loading the Lobby
- The home page allows the users to input their username and then select between the lobby or the library. 
- If the lobby is selected the user will enter the lobby which will update live as other users join the lobby until a the lobby is full (4 players)

![Alt Text](https://media.giphy.com/media/9TEJp6nVpkswegZqdr/giphy.gif)

#### Creating a Card
- If a user selects the "Add a Card" button, a modal will pop up
- Users will be able to:
  - Draw whatever their imagination allows them to
  - Select from multiple colors
  - Select themselves as the card creator from a dropdown of users
  - Give a card a point value (*must be a number*)
  - Input the rules of a card
  - Input tags to cards, inorder to search in the library

![Alt Text](https://media.giphy.com/media/sVBIYazRPqE3B3Pcyx/giphy.gif)

#### Editing the Game Deck
- Once All the desired cards have been created, users will be able to select which cards they want in the game deck
- Options include any newly created cards, as well as cards that are saved in the library from previous games.

![Alt Text](https://media.giphy.com/media/NmvyrOVEYMBC9bVNzS/giphy.gif)

#### In Game User View
- Upon entering the game, the board pops up with a deck in the center and a "Draw" button that is active as long as there are cards in the deck.
- When a user clicks on the draw button, their hand will be populated but those cards will be hidden from the rest of the users
- The user will be able to click on a card in their hand and drag it to any other players section of the board to place it infront of that player.

![Alt Text](https://media.giphy.com/media/Hw8SPDP0dTT2jZsECa/giphy.gif)

#### Contact the Team: 
- [Team](http://google.com)
