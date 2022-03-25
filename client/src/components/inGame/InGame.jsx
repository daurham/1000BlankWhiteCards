import React, { useState } from 'react';
import Board from './Board.jsx';
import Rule from './Rule.jsx';
import TurnTracker from './TurnTracker.jsx';
import {Modal, Box} from '@mui/material';
import Typography from '@mui/material/Typography';

export default function InGame() {


  return (
    <div>
      {/* <Typography variant='h1' id='boardTitle'>
        Game Board
      </Typography> */}
      <div id='ingamebtns'>
      <TurnTracker />
      </div>
      <Board />
    </div>
  );
}