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
}

export default function TransferList({cards, socket}) {
  const [checked, setChecked] = React.useState([]);
  const library = cards.filter(card => card.position === "library");
  const deck = cards.filter(card => card.position === "deck");

  const moveCard = (id, position) => socket.emit('move-card', id, position);
  const containerStyle={height:200, width:200, border:'solid 1px'}
  const imgStyle={height: 200, width:200}
  const border={border:'solid 1px'}
// might break something rn!
  return (

    <Stack spacing ={2}>
    <ImageList sx={{ width: 500, height: 450 }} style={border}>
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
  <ImageList sx={{ width: 500, height: 450 }} style={border}>
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

    // <Grid container spacing={2} justifyContent="center" alignItems="top">
    //   <Grid item xs={5}>
    //     Library
    //     <ImageList cols={3}>
    //       {library.map(
    //         card => (
    //           <ImageListItem key={card.image}>
    //             <button onClick={() => moveCard(card.id, "deck")}>
    //               <img src={card.image}/>
    //             </button>
    //           </ImageListItem>
    //         )
    //       )}
    //     </ImageList>
    //   </Grid>
    //   <Grid item xs={5}>
    //     Deck
    //     <ImageList cols={3}>
    //       {deck.map(
    //         card => (
    //           <ImageListItem key={card.image}>
    //             <button onClick={() => moveCard(card.id, "library")}>
    //               <img src={card.image} />
    //             </button>
    //           </ImageListItem>
    //         )
    //       )}
    //     </ImageList>
    //   </Grid>
    // </Grid>