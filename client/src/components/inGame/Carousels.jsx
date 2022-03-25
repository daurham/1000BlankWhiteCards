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
import Stack from '@mui/material/Stack';
import {Modal, Box} from '@mui/material';

// export default function Carousels() {
//   const { cards } = useData();
//   const deck = cards.filter(card => card.position === 'deck');
//   console.log(deck, 'deck in Carousel');
//   return(
//     <Carousel interval={null}>
//       {deck.map((item) =>

export default function Carousels(props) {

    const [deckContext, setDeck] = useState(props.player);
    const[rules, setRules]=useState('')
    const [open, setOpen] = React.useState(false);

    // if(rules.length > 1){
    //   setOpen(true);
    // }
    const handleOpen = (e) => {
      e.preventDefault()
      console.log('click')
      const desc =  e.target.alt

        setRules(desc)
        setOpen(true);

      console.log('desc: ', desc)
    }
    const handleClose = () => {
      setRules('');
      setOpen(false);
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return !props.cards ? null : (
    <Carousel interval={null}>
      {props.cards.map((item) =>
        <Carousel.Item>
          {/* {props.isPlayer ? <FunctionalCard card={item} handleChange={props.handleChange} player={'One'} players={props.players}/> : <MediaCard card={item}/>} */}
          <img
            id="carousel-img"
            src={item.image}
            alt={item.cardRules}
            value={item.cardRules}
            onClick={handleOpen}
            style={{cursor: "pointer"}}
          />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Current Card
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={item.image} />
            <br/>
            Author: {item.createdBy}
            <br/>
            Points: {item.points}
            <br/>
            Rules: {item.cardRules}
          </Typography>
        </Box>
      </Modal>
          {/* <Carousel.Caption>
            <p>{item.points}</p>
            <p style={{textAlign: 'center'}}>
              {item.cardRules}
            </p>
          </Carousel.Caption> */}
          <div id='hand-btns'>
          {props.isPlayer ? <>
          <Stack spacing={3} direction='row' >
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={deckContext}
            label="Age"
            size="small"
            onChange={(e) => (setDeck(e.target.value))}
          >
            {/* <MenuItem value={'One'}>Player One</MenuItem>
            <MenuItem value={'Two'}>Player Two</MenuItem>
            <MenuItem value={'Three'}>Player Three</MenuItem>
            <MenuItem value={'Four'}>Player Four</MenuItem> */}
            <MenuItem value={props.player}>{props.player}</MenuItem>
            {props.players.map((player) => (
              <MenuItem value={player.name}>{player.name}</MenuItem>
            ))}
            <MenuItem value={'center'}>Global</MenuItem>
          </Select>
          <Button variant='outlined' size="small" id="move-btn" onClick={() => props.handleChange(item, deckContext)}>Move</Button>
          </Stack>
          </> : null}
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  )
}