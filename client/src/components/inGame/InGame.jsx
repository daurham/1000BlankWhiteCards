import React, { useState } from 'react';
import Board from './Board.jsx';
import Rule from './Rule.jsx';
import TurnTracker from './TurnTracker.jsx';
import { Modal, Box, Typography } from '@mui/material';

export default function InGame() {

  return (
    <div>
      <div id='ingamebtns'>
        <TurnTracker />
      </div>
      <Board />
    </div>
  );
}