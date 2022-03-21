import React from 'react';
import { Link } from "react-router-dom";
import Canvas from './Canvas';


export default function Home() {
  return (
    <div>
      <Canvas />
      <h1>1000 Blank White Cards!</h1>
      <Link to='/Lobby'><h3>Go To Lobby!</h3></Link>
      <Link to="/Library"><h3>Card Library</h3></Link>
    </div>
  );
}
