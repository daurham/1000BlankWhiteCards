import * as React from 'react';
import {
  Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, Button, Paper, Stack
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
};

export default function TransferList({ cards, socket }) {
  const [checked, setChecked] = React.useState([]);
  const library = cards.filter(card => card.position === "library");
  const deck = cards.filter(card => card.position === "deck");

  const moveCard = (id, position) => socket.emit('move-card', id, position);
  const containerStyle = { height: 200, width: 200, border: 'solid 1px' };
  const imgStyle = { height: 200, width: 200 };
  const border = { border: 'solid 1px' };
  return (
    <Stack spacing={5} direction='row' id="lib-and-deck">
      <ImageList sx={{ width: 500, height: 500, justifyItems: 'center' }} style={border}>
        <ImageListItem key="Subheader" cols={2} >
          <ListSubheader component="div">Library</ListSubheader>
        </ImageListItem>
        {library.map((card) => (
          <ImageListItem key={card.image} style={containerStyle}>
            <img
              src={`${card.image}`}
              alt={card.cardRules}
              loading="lazy"
              style={imgStyle}
            />
            <ImageListItemBar
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() => moveCard(card.id, "deck")}
                >
                  +
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList sx={{ width: 500, height: 500, justifyItems: 'center' }} style={border}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Deck</ListSubheader>
        </ImageListItem >
        {deck.map((card) => (
          <ImageListItem key={card.image} style={containerStyle}>
            <img
              src={`${card.image}`}
              alt={card.cardRules}
              loading="lazy"
              style={imgStyle}
            />
            <ImageListItemBar
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() => moveCard(card.id, "library")}
                >
                  X
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
