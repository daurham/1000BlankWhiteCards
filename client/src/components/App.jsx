import React from 'react';
import Home from './Home';
import Library from './Library';
import InGame from './InGame';
import Lobby from './Lobby';

export default function App() {
  return (
    <div>
      <Home />
      <Library />
      <Lobby />
      <InGame />
    </div>
  );
};