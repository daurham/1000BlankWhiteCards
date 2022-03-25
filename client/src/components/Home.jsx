import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useData } from '../UseContext';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   inputField: {
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     marginRight:'10px',
//   },
// });

export default function Home() {
  // const classes = useStyles();
  const [ userNameInput, setUserNameInput ] = useState('');
  // const [ playersLocal, setPlayersLocal ] = useState('');
  const { userName, setUserName, socket, players, setPlayers, counter, setCounter } = useData();
  // const [ counter, setCounter ] = useState(0);

  console.log('players.length: ', players.length);
  const lobbyLinkActive = players.length <= 4;
  // console.log(lobbyLinkActive);
  const lobbyLinkClass = lobbyLinkActive ? "" : "disabled";
  // console.log(lobbyLinkActive)
  // console.log(counter);

  // Don't allow navigation to lobby until username is set.
  // const lobbyLinkOnClick = (e) => {
  //   if (!lobbyLinkActive) {
  //     e.preventDefault();
  //   }
  // }

  const onSubmitUserName = (e) => {
    e.preventDefault()
    // console.log('username: ', userNameInput)
    setUserName(userNameInput);
    socket.emit('add-player', userNameInput)
    // setCounter(() => counter++);
    // useEffect(() => {
    // // add a player here to socket
    // socket.on('player-list', (players) => setPlayersLocal);
  }

  socket.on('player-list', (players) => {
    console.log('global socket on home: ',players);
  });

  // useEffect(() => {
  //   const playersListener = (playerList) => {
  //     console.log("player-list", playerList);
  //     setPlayers(playerList);
  //     setPlayersLocal(playerList);
  //     console.log('curr players: ', playerList)
  //   }
  //   console.log('updates users: ', userNameInput)

  //   socket.on('player-list', playersListener);
  //   return () => socket.off('player-list', playersListener);
  // }, [players, userName, userNameInput]);

  // if (playersLocal) {
  //   console.log('rendered player name?',playersLocal)
  // }

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  }
  // useEffect(() => {}, [lobbyLinkActive])

  const handleNew=(e)=>{
    e.preventDefault()
    console.log('start a new game')
    // will use socket.emit here to delete all players
    // might need to update a state to rerender the page
    socket.emit('end-game');
  }

  return (
    <div>
      <Typography variant='h1' id='mainTitle'>
        1000 BLANK WHITE CARDS
      </Typography>
      <div className="home-btns">
        <form onSubmit={onSubmitUserName} className='form'>
          <TextField type='text' placeholder='Your Nickname' value={userNameInput}  onChange={handleUserName} required
          id="outlined-required" size='large' />
          <Button type='submit' variant='outlined' size='large' id="btn1" value='Set Nickname'>Submit</Button>
        </form>
        <Typography>
          <Stack spacing={2} direction='row' className='link'>
            {lobbyLinkActive ? (<Button href='/Lobby' variant='outlined' size='large' className={lobbyLinkClass} id="btn2">Go To Lobby</Button>) : <Button href='/' variant='outlined' size='large' className={lobbyLinkClass} id="btn2">Full Lobby</Button>}
            <Button href="/Library" variant='outlined' size='large' id="btn3">Card Library</Button>
          </Stack>
        </Typography>
        <Typography className='gamebtn'>
          <Button variant='outlined' size='large' onClick={handleNew} id="btn4">New Game</Button>
        </Typography>
        {/* {lobbyLinkActive ? (<Link to='/Lobby' className={lobbyLinkClass} >Go To Lobby!</Link>) : <Link to='/' className={lobbyLinkClass} >Full Lobby!</Link>}
        <br/>
        <Link to="/Library">Card Library</Link> */}
      </div>
    </div>
  );
}
