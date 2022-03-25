import React, { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import Carousels from './Carousels.jsx';
import Card from './FunctionalCard';
import GlobalCard from '../Card';
import { useData } from '../../UseContext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Background = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   grid-template-rows: [row1-start] 1fr
//   [row1-end row2-start] 5fr
//   [row2-end row3-start] 1fr
//   [last-line];
//   height: 1100px;
//   width: 1100px;
//   background-color: rgba(101, 103, 109, 0.2);
//   position: relative;
//   border: 0.1rem solid rgba(101, 103, 109, 0.5);
//   border-radius: 5px;
//   margin-bottom: 10%;
// `;

// const InnerContainer= styled.div`
//   grid-column: 2 / 7;
//   grid-row: 2;
// `;

const Hand= styled.div`
  // grid-column: 4 / 5;
  // grid-row: 3;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  // align-items: end;
`;

const Board = styled.div`
  height: 1000px;
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 1fr
  [row2-end row3-start] 1fr
  [row3-end row4-start] 1fr
  [row4-end row5-start] 1fr
  [row5-end row6-start] 1fr
  [row6-end row7-start] 1fr
  [row7-end row8-start] 1fr
  [row8-end row9-start] 1fr
  [last-line];
  border: 0.1rem solid rgba(101, 103, 109, 0.5);
  border-radius: 5px;
  background:
    linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(101, 103, 109, 0.5) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
    linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(101, 103, 109, 0.5) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
      rgba(101, 103, 109, 0.2);
`;

const Top = styled.div`
  grid-column: 4 / 7;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  grid-column: 4 / 7;
  grid-row: 7 / 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Left = styled.div`
  grid-column: 1 / 4;
  grid-row: 4 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  grid-column: 7 / 10;
  grid-row: 4 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Innerboard = styled.div`
  grid-column: 4 / 7;
  grid-row: 4 / 7;
  background-color: rgba(2, 136, 209, 0.2);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1rem solid rgba(2, 136, 209, 0.5);
  border-radius: 5px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Deck = styled.div`
  height: 15rem;
  width: 30%;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  // background-color: rgba(101, 103, 109, 0.2);
  // border: 0.1rem solid rgba(101, 103, 109, 0.5);
  display: flex;
  align-items: center;
  height: 15rem;
  width: 60%;
`;

// const Button = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 15rem;
//   background-color: white;
// `;

export default function GameBoard() {

//   const dummyCardData = useData();
// const card = dummyCardData.cards;

// original code below this
const { cards, socket, players, userName } = useData();
// if(!players.length){
//   return null;
// }

// new code in between here

// const { cards, socket, userName } = useData();
// const [players, setPlayers] = useState([]);

// useEffect(() => {
//   const playersListener = (playerList) => {
//     console.log("player-list", playerList);
//     setPlayers(playerList);
//   };


//   socket.on('player-list', playersListener);
//   socket.on('newPlayer', playersListener);
//   return () => {
//     socket.off('player-list', playersListener);
//     socket.off('newPlayer', playersListener);
//   };
// }, [players])

// useEffect(() => socket.emit('get-players'), []);


// new code ends here


const playerOrder = players.filter(player => player.name !== userName);

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
    <div>
    <Typography variant='h6'>
    <Container>
      {/* <Background> */}
        {/* <InnerContainer> */}
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
                <Deck>
                  <img src="./image/drawful.jpg" style={{width: '100%', height: 'auto', borderRadius: '10px'}}/>
                  {/* <div style={}>
                    <Carousels sx={{display:'hidden', height:'1px'}} cards={deck} player={false}/>
                  </div> */}
                </Deck>
                <Center>
                <Carousels cards={center} player={false} />
                </Center>
              </Cards>
              <Button variant='outlined' size='large' id="draw-btn" onClick={handleDraw}>
                Draw
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
         {/* </InnerContainer> */}

          <Hand>
            <Carousels cards={playerDeck} isPlayer={true} player={userName} handleChange={handleChange} players={playerOrder}/>
          </Hand>
      {/* </Background> */}
    </Container>
    </Typography>
    </div>
  );
};
