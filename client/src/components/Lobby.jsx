import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx'


export default function Lobby() {

  return (
  <div>
    <h1>Lobby</h1>
    <Link to="/Game">Go to Game!</Link>
    <Link to="/">Exit</Link>
  </div>
  );
}
