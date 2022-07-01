import React, { useContext, useState, useEffect } from 'react';
import styled from "styled-components";
import Carousels from './Carousels.jsx';
import GlobalCard from '../Card';
import { useData } from '../../UseContext';
import { Typography, Button } from '@mui/material';
import CardHand from './CardHand';
import {
  Container,
  Hand,
  Board,
  Top,
  Bottom,
  Left,
  Right,
  Innerboard,
  Cards,
  Deck,
  Center
} from './InGameStyles/BoardStyles';

export default function GameBoard() {

  const { cards, socket, players, userName } = useData();

  const playerOrder = players.filter(player => player.name !== userName);

  useEffect(() => socket.emit('get-players'), []);
  socket.on('player-list', (players) => {
  });

  const deck = cards.filter(card => card.position === 'deck');
  const centerSpot = cards.filter(card => card.position === 'center');
  const playerOne = cards.filter(card => card.position === userName);
  const playerTwo = cards.filter(card => card.position === playerOrder[0].name);
  const playerThree = cards.filter(card => card.position === playerOrder[1].name);
  const playerFour = cards.filter(card => card.position === playerOrder[2].name);
  const playerDeck = cards.filter(card => card.position === `${userName}Hand`);

  const [bottom, setBottom] = useState(false);
  const [left, setLeft] = useState(false);
  const [top, setTop] = useState(false);
  const [right, setRight] = useState(false);
  const [center, setCenter] = useState(false);


  function handleChange(card, moveTo) {
    socket.emit('move-card', card.id, moveTo)
  }


  function handleDraw() {
    const card = deck[deck.length - 1];
    socket.emit('move-card', card.id, `${userName}Hand`)
  }

  return (
    <div>
      <Typography variant="h6'">
        <Container>
          <Board>

            <Top id="top" onMouseEnter={() => { setTop(true) }} onMouseLeave={() => { setTop(false) }}>
              {playerOrder[1].name}
              <Carousels cards={playerThree} isPlayer={false} />
            </Top>

            <Left id="left" onMouseEnter={() => { setLeft(true) }} onMouseLeave={() => { setLeft(false) }}>
              {playerOrder[0].name}
              <Carousels cards={playerTwo} isPlayer={false} />
            </Left>

            <Innerboard>

              <Cards>

                <Deck className="deck">
                  {deck.length > 0 ?
                    <img
                      src="./image/drawful.jpg"
                      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                    : null}
                  {deck.length > 0 ?
                    <Button variant="outlined" size="sm" id="draw-btn" onClick={handleDraw} disabled={deck.length <= 0}>
                      Draw
                    </Button>
                    : null}
                </Deck>

                <Center id="center" onMouseEnter={() => { setCenter(true) }} onMouseLeave={() => { setCenter(false) }}>
                  <Carousels cards={centerSpot} player={false}>
                  </Carousels>
                </Center>

              </Cards>
            </Innerboard>

            <Right id="right" onMouseEnter={() => { setRight(true) }} onMouseLeave={() => { setRight(false) }}>
              {playerOrder[2].name}
              <Carousels cards={playerFour} isPlayer={false} />
            </Right>

            <Bottom id="bottom" onMouseEnter={() => { setBottom(true) }} onMouseLeave={() => { setBottom(false) }}>
              <Carousels cards={playerOne} isPlayer={false} />
            </Bottom>

          </Board>

          <Hand>
            <CardHand cards={playerDeck} height={500} handleChange={handleChange} player={userName} players={playerOrder} />
          </Hand>
        </Container>
      </Typography>
    </div>
  );
};
