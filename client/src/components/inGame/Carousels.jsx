import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useData } from '../../UseContext';
import MediaCard from '../Card.jsx';
import FunctionalCard from './FunctionalCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// export default function Carousels() {
//   const { cards } = useData();
//   const deck = cards.filter(card => card.position === 'deck');
//   console.log(deck, 'deck in Carousel');
//   return(
//     <Carousel interval={null}>
//       {deck.map((item) =>

export default function Carousels(props) {

    const [deckContext, setDeck] = useState(props.player);

  return !props.cards ? null : (
    <Carousel interval={null}>
      {props.cards.map((item) =>
        <Carousel.Item>
          {/* {props.isPlayer ? <FunctionalCard card={item} handleChange={props.handleChange} player={'One'} players={props.players}/> : <MediaCard card={item}/>} */}
          <img
            className="d-block w-100"
            src={item.image}
            alt="card"
          />
          <Carousel.Caption>
            <p>{item.points}</p>
            <p style={{textAlign: 'center'}}>{item.rules}</p>
          </Carousel.Caption>
          {props.isPlayer ? <>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={deckContext}
            label="Age"
            onChange={(e) => (setDeck(e.target.value))}
          >
            {/* <MenuItem value={'One'}>Player One</MenuItem>
            <MenuItem value={'Two'}>Player Two</MenuItem>
            <MenuItem value={'Three'}>Player Three</MenuItem>
            <MenuItem value={'Four'}>Player Four</MenuItem> */}
            <MenuItem value={props.player}>{props.player}</MenuItem>
            {props.players.map((player) => (
              <MenuItem value={player}>{player}</MenuItem>
            ))}
            <MenuItem value={'Global'}>Global</MenuItem>
          </Select>
          <Button size="small" onClick={() => props.handleChange(item, deckContext)}>Move</Button>
          </> : null}
        </Carousel.Item>
      )}
    </Carousel>
  )
}
