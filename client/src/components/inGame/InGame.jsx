import React from 'react';
import Board from './Board.jsx';
import TurnTracker from './TurnTracker.jsx';

export default function InGame() {
  return (
    <div>
      <div id='ingamebtns'>
        <TurnTracker />
      </div>
      <Board />
    </div>
  );
};
