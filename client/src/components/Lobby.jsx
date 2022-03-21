import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx'
import DrawingArea from './DrawingArea';


export default function Lobby() {

  return (
  <div>
    <h1>Lobby</h1>
    <div className="App drawing-area">
      <DrawingArea />
    </div>
    <Link to="/">Exit</Link>
  </div>
  );
}
