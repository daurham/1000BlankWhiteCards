import React, { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import Carousels from './Carousels.jsx';
import Card from './FunctionalCard';
import GlobalCard from '../Card';
import { useData } from '../../UseContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 5fr
  [row2-end row3-start] 1fr
  [last-line];
  height: 50rem;
  width: 50rem;
  background-color: gray;
  position: relative;
  border: 0.1rem solid black;
`;

const InnerContainer= styled.div`
  grid-column: 2 / 7;
  grid-row: 2;
`;

const Hand= styled.div`
  grid-column: 4 / 5;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Board = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 1fr
  [row2-end row3-start] 1fr
  [row3-end row4-start] 1fr
  [row4-end row5-start] 1fr
  [last-line];
  border: 0.1rem solid black;
  background:
    linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
    linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
    white;
`;

const Top = styled.div`
  grid-column: 3 / 4;
  grid-row: 1;
  display: flex;
  align-items: center;
`;

const Bottom = styled.div`
  grid-column: 3 / 4;
  grid-row: 5;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  grid-column: 1 / 2;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  grid-column: 5 / 6;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Innerboard = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 5;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1rem solid black;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Deck = styled.div`
  background-color: gray;
  height: 15rem;
  width: 45%;
`;

const Center = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  height: 15rem;
  width: 45%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 15rem;
  background-color: white;
`;

export default function GameBoard() {

//   const dummyCardData = useData();
// const card = dummyCardData.cards;

const { cards, socket, players, userName } = useData();
const playerOrder = players.filter(player => player.name !== userName);

useEffect(() => socket.emit('get-players'),[]);
socket.on('player-list', (players) => {
  console.log('global socket on board: ',players);
});
// console.log('userName: ', userName);
// console.log('cards: ', cards);
console.log('Board, players: ', players);
console.log('Board, socket: ', socket);
// console.log('playerOrder: ', playerOrder);

const deck = cards.filter(card => card.position === 'deck');
const center = cards.filter(card => card.position === 'center');
const playerOne = cards.filter(card => card.position === userName)
const playerTwo = cards.filter(card => card.position === playerOrder[0].name)
const playerThree = cards.filter(card => card.position === playerOrder[1].name)
const playerFour = cards.filter(card => card.position === playerOrder[2].name)
const playerDeck = cards.filter(card => card.position === `${userName}Hand`)

//const [playerState, setPlayerState] = useState({Global: []})
//const [playerDeck, setPlayerDeck] = useState([]);
// const [globalDeck, setGlobalDeck] = useState(deck)

// useEffect(() => {
//   players.forEach(item => setPlayerState(playerState => ({...playerState, [item]: [] })));
// }, [players.length])

// useEffect(() => {
//   card.forEach(item => setGlobalDeck(globalDeck => ([...globalDeck, item])));
// }, [])

 function handleChange(card, moveTo) {
   //setPlayerDeck(playerDeck.filter(item => item.rules !== card.rules));
   //setPlayerState({...playerState, [moveTo]:[...playerState[moveTo], card]});
   socket.emit('move-card', card.id, moveTo)
 }

 //const moveCard = (id, position) => socket.emit('move-card', id, position);

 function handleDraw() {
  //  const card = globalDeck[(globalDeck.length-1)];
  const card = deck[deck.length - 1];
  //setGlobalDeck(globalDeck.filter(item => item.rules !== card.rules));
  socket.emit('move-card', card.id, `${userName}Hand`)
  //setPlayerDeck(playerDeck => [...playerDeck, card]);
 }

  return (
    <Container>
      <Background>
        <InnerContainer>
          <Board>

            <Top>
              {playerOrder[1].name}
              <Carousels cards={playerThree} isPlayer={false}/>
            </Top>

            <Left>
              {playerOrder[0].name}
              <Carousels cards={playerTwo} isPlayer={false}/>
            </Left>

            <Innerboard>
              <Cards>
                <Deck>Deck
                  <Carousels cards={deck} player={false}/>
                </Deck>
                <Center>
                <Carousels cards={center} player={false}/>
                </Center>
              </Cards>
              <Button>
                <button type="submit" onClick={handleDraw}>Draw</button>
              </Button>
            </Innerboard>

            <Right>
              {playerOrder[2].name}
              <Carousels cards={playerFour} isPlayer={false}/>
            </Right>

            <Bottom>
              <Carousels cards={playerOne} isPlayer={false}/>
            </Bottom>

          </Board>
         </InnerContainer>

          <Hand>
            {userName}
            <Carousels cards={playerDeck} isPlayer={true} player={userName} handleChange={handleChange} players={playerOrder}/>
          </Hand>
      </Background>
    </Container>
  );
};
