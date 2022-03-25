import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Modal, Stack, Select, FormControl, MenuItem, InputLabel, TextField } from '@mui/material';
import CanvasDraw from "react-canvas-draw";
import TransferList from './TransferList';
import Cards from './Cards.jsx';
import axios from 'axios';
import { useData } from '../UseContext';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const socket = io('http://localhost:8080');

export default function BasicModal() {
  // States
  const [user, setUser] = useState('');
  const [points, setPoints] = useState(0);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [openCanvas, setCanvasOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('red');
  const [openDeck, setDeckOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const [allcards, setAllCards] = useState([]);
  const canvasDraw = useRef();

  const { socket, cards, setCards, players, userName } = useData();
  const canJoin = () => players.length === 4;
  let hasEnoughPlayers = canJoin();

  //functions
  const handleCanvasOpen = () => setCanvasOpen(true);
  const handleCanvasClose = () => setCanvasOpen(false);
  const handleDeckOpen = () => setDeckOpen(true);
  const handleDeckClose = () => setDeckOpen(false);
  // edit this one to be like handle selected color
  const handleUser = (e) => {
    setUser(e.target.value);
  }
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  }
  const handlePoints = (e) => {
    setPoints(Number(e.target.value));
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleTags = (e) => {
    setTags(e.target.value);
  }

  const handleClear = (e) => {
    e.preventDefault
    canvasDraw.current.clear();
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = canvasDraw.current.getDataURL()
    const data = new FormData();
    data.append('file', url);
    data.append('upload_preset', 'catwalk');
    data.append('cloud_name', 'dgdqzfkbf');

    axios({
      method: 'post',
      url: 'https://api.cloudinary.com/v1_1/dgdqzfkbf/image/upload',
      data,
    })
      .then((res) => {
        const { data: imageData } = res;
        setPhoto(() => imageData.url);
        // console.log(imageData.url);
        const date = new Date();
        const newDate = date.toISOString();
        socket.emit('add-cards', [
          {
            createdBy: user,
            dateCreated: newDate,
            cardRules: description,
            points: points,
            image: imageData.url,
            tags: tags
          }
        ])
        canvasDraw.current.clear();
        setTags(() => '');
        setDescription(() => '');
        setPoints(() => '');
        setTags(() => '');
      })
      .catch((err) => console.log(err));

  }
  useEffect(() => hasEnoughPlayers = canJoin(), [players])

  return !cards || !players ? null : (
    <div id='lobby'>
      <Typography variant='h1' id="lobby-title">LOBBY</Typography>
      <div className="lobby-players">
        <Typography variant='h2' id="lobby-players-title">PLAYERS</Typography>
        {players.map((player, index) => (
          <Typography variant="subtitle1" key={index} id="lobby-player-name">{player.name.toUpperCase()}</Typography>
        ))}
      </div>
      <div className="lobby-add-btn">
        <Button variant='outlined' size='large' id="add-btn" onClick={handleCanvasOpen}>Add A Card</Button>
      </div>
      <Modal
        open={openCanvas}
        onClose={handleCanvasClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cards.length < 40 ? `Add ${Math.floor((40 - cards.length) / 4)} cards before moving on!` : `You've got enough cards!`}
          </Typography>
          <Stack direction="row" spacing={2}>
            <CanvasDraw
              brushColor={selectedColor}
              ref={canvasDraw}
            />
            <Stack direction="column" spacing={2}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Settings:
              </Typography>
              <FormControl >
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedColor}
                  label="Color"
                  onChange={handleColorChange}
                >
                  <MenuItem value={'black'}>Black</MenuItem>
                  <MenuItem value={'red'}>Red</MenuItem>
                  <MenuItem value={'blue'}>Blue</MenuItem>
                  <MenuItem value={'yellow'}>Yellow</MenuItem>
                  <MenuItem value={'orange'}>Orange</MenuItem>
                  <MenuItem value={'green'}>Green</MenuItem>
                  <MenuItem value={'pink'}>Pink</MenuItem>
                </Select>
              </FormControl>
              <FormControl >
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  label="User"
                  onChange={handleUser}
                >
                  {players.map((player, index) =>
                    <MenuItem value={player.name} key={index}>
                      {player.name}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>

              <TextField id="outlined-basic" label="Points" variant="outlined" value={points} type="number" onChange={handlePoints} />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                value={description}
                multiline
                rows={3}
                onChange={handleDescription}
              />
              <TextField id="outlined-basic" label="Tags" variant="outlined" value={tags} onChange={handleTags} />
              <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
              <Button variant="outlined" onClick={handleClear}>Clear</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <div>
        <div className="lobby-edit">
          <Button variant='outlined' size='large' id="edit-btn" onClick={handleDeckOpen}>Edit Deck</Button>
          <Modal
            open={openDeck}
            onClose={handleDeckClose}
            sx={{
              overflow: 'scroll',
              height: '100'
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box id="edit-deck-box">
              <Typography id="modal-modal-title" variant="h6" component="h2">
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              </Typography>
              <TransferList cards={cards} socket={socket} />
            </Box>
          </Modal>
        </div>
        <div className="lobby-start">
          <StyledLink to={hasEnoughPlayers ? "/Game" : '#'}>
            <Button variant='outlined' size='large' id="start-btn">Start Game</Button>
          </StyledLink>
        </div>
        <div className="lobby-exit">
          <StyledLink to="/">
            <Button href="/" variant='outlined' size='large' id="exit-btn">Exit</Button>
          </StyledLink>
        </div>
      </div>
    </div>
  );
}