import * as React from 'react';
import {
  Grid, ImageList, ImageListItem,
} from '@mui/material';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Cards from './Cards.jsx';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList({cards, socket}) {
  const [checked, setChecked] = React.useState([]);
  const library = cards.filter(card => card.position === "library");
  const deck = cards.filter(card => card.position === "deck");

  const moveCard = (id, position) => socket.emit('move-card', id, position);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="top">
      <Grid item xs={5}>
        Library
        <ImageList cols={1}>
          {library.map(
            card => (
              <ImageListItem key={card.image}>
                <button onClick={() => moveCard(card.id, "deck")}>
                  <img src={card.image}></img>
                </button>
              </ImageListItem>
            )
          )}
        </ImageList>
      </Grid>
      <Grid item xs={5}>
        Deck
        <ImageList cols={1}>
          {deck.map(
            card => (
              <ImageListItem key={card.image}>
                <button onClick={() => moveCard(card.id, "library")}>
                  <img src={card.image}></img>
                </button>
              </ImageListItem>
            )
          )}
        </ImageList>
      </Grid>
    </Grid>
  );
}
