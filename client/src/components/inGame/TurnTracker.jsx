import React from 'react';
import { Stack, Typography } from '@mui/material/';
import { useData } from '../../UseContext';
import Rule from './Rule.jsx'

export default function TurnTracker() {
  const { players } = useData();
  return (
    <Typography component={'span'}>
      <Stack spacing={5} direction='row'>
        <select name='usertracker' id='usertracker'>
          <option>User Tracker</option>
          {players.map((player, index) =>
            <option value={player} key={index}>{player.name}</option>
          )}
        </select>
        <Rule />
      </Stack>
    </Typography>
  );
}

