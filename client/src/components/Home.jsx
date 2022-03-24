import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useData } from '../UseContext';

export default function Home() {
  const [ userNameInput, setUserNameInput ] = useState('');
  const { userName, setUserName, socket, players, counter, setCounter } = useData();
  // const [ counter, setCounter ] = useState(0);

  const lobbyLinkActive = !!userName && players.length < 4;
  const lobbyLinkClass = lobbyLinkActive ? "" : "disabled";
  // console.log(lobbyLinkActive)
  // console.log(counter);

  // Don't allow navigation to lobby until username is set.
  const lobbyLinkOnClick = (e) => {
    if (!lobbyLinkActive) {
      e.preventDefault();
    }
  }

  const onSubmitUserName = (e) => {
    e.preventDefault()
    // console.log('username: ', userNameInput)
    setUserName(userNameInput);
    socket.emit('add-player', userNameInput)
    // setCounter(() => counter++);
    // useEffect(() => {
    // add a player here to socket
  }

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  }
  // useEffect(() => {}, [lobbyLinkActive])

  const handleNew=(e)=>{
    e.preventDefault()
    console.log('start a new game')
    // will use socket.emit here to delete all players
    // might need to update a state to rerender the page
  }

  return (
    <div>
      <h1>1000 Blank White Cards!</h1>
      <form onSubmit={onSubmitUserName}>
        <input type='text' placeholder='Your Nickname' value={userNameInput} disabled={lobbyLinkActive} onChange={handleUserName} />
        <input type='submit' disabled={!!userName} value='Set Nickname' disabled={lobbyLinkActive} />
      </form>
      {lobbyLinkActive ? (<Link to='/Lobby' className={lobbyLinkClass} ><h3>Go To Lobby!</h3></Link>) :<Link to='/' className={lobbyLinkClass} ><h3>Full Lobby!</h3></Link>}
      <Link to="/Library"><h3>Card Library</h3></Link>
      <button onClick={handleNew}>New Game</button>
    </div>
  );
}
