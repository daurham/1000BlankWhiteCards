import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useData } from '../../UseContext';

export default function MediaCard(props) {
  const [deckContext, setDeck] = useState(props.player);
  return !props.card ? null : (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.card.image}
        alt="image of card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.card.points}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.rules}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.tags}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {card.date}
        </Typography> */}
      </CardContent>
      <CardActions>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={deckContext}
          label="Age"
          onChange={(e) => (setDeck(e.target.value))}
        >
          {props.players.map((player) => (
            <MenuItem value={player}>{player}</MenuItem>
          ))}
          <MenuItem value={'Global'}>Global</MenuItem>
        </Select>
        <Button size="small" onClick={() => props.handleChange(props.card, props.player, deckContext)}>Move</Button>
      </CardActions>
    </Card>
  );
}
