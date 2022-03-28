import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useData } from '../UseContext';
import { Typography, Stack, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Home() {
  const [userNameInput, setUserNameInput] = useState('');
  const { userName, setUserName, socket, players, setPlayers } = useData();
  const lobbyLinkActive = players.length <= 4;
  const lobbyLinkClass = lobbyLinkActive ? "" : "disabled";

  const onSubmitUserName = (e) => {
    e.preventDefault()
    setUserName(userNameInput);
    socket.emit('add-player', userNameInput)
  };

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  };

  const handleNew = (e) => {
    e.preventDefault()
    socket.emit('end-game');
  };

  return (
    <div id='home'>
      <Typography variant='h1' id='mainTitle'>
        1000 BLANK WHITE CARDS
      </Typography>
      <div className="home-btns">
        <form onSubmit={onSubmitUserName} className='form'>
          <TextField type='text' placeholder='Your Nickname' value={userNameInput} onChange={handleUserName} required
            id="outlined-required" size='large' />
          <Button type='submit' variant='outlined' size='large' id="btn1" value='Set Nickname'>Submit</Button>
        </form>
        <Typography component={'span'}>
          <Stack spacing={2} direction='row' className='link' >
            {lobbyLinkActive ?
              (<StyledLink to='/Lobby' className={lobbyLinkClass} >
                <Button variant='outlined' size='large' className={lobbyLinkClass} id="btn2">
                  Go To Lobby
                </Button>
              </StyledLink>) :
              (<Link to='/' className={lobbyLinkClass} >
                <Button variant='outlined' size='large' className={lobbyLinkClass} id="btn2">
                  Full Lobby
                </Button>
              </Link>)
            }
            <StyledLink to="/Library">
              <Button variant='outlined' size='large' id="btn3">
                Card Library
              </Button>
            </StyledLink>
          </Stack>
        </Typography>
        <Typography className='gamebtn'>
          <Button variant='outlined' size='large' onClick={handleNew} id="btn4">New Game</Button>
        </Typography>
      </div>
    </div>
  );
}
