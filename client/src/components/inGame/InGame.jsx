import React from 'react';
import Board from './Board.jsx';
import Rule from './Rule.jsx';
import TurnTracker from './TurnTracker.jsx';

export default function InGame() {
  return (
    <div>
      <Rule />
      <Board />
      <TurnTracker />
    </div>
  );
}