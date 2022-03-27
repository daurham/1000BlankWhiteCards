import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useData } from '../../UseContext';
import MediaCard from '../Card.jsx';
import { Modal, Box, Stack, Select, FormControl, MenuItem, Typography, Button } from '@mui/material';

export default function Carousels(props) {

  const [deckContext, setDeck] = useState(props.player);
  const [rules, setRules] = useState('')
  const [open, setOpen] = React.useState(false);
  const [currentCard, setCurrentCard] = useState('');

  const handleOpen = (item) => {
    setCurrentCard(item);
    setOpen(true);
  };

  const handleClose = () => {
    setRules('');
    setOpen(false);
  };

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
          <img
            id="carousel-img"
            src={item.image}
            alt={item}
            onClick={() => { handleOpen(item) }}
            style={{ cursor: "pointer" }}
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
                <img src={currentCard.image} />
                <br />
                Author: {currentCard.createdBy}
                <br />
                Points: {currentCard.points}
                <br />
                Rules: {currentCard.cardRules}
              </Typography>
            </Box>
          </Modal>
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
  );
}