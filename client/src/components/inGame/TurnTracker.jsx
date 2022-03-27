import React from 'react';
import styled from "styled-components";
import { Stack, Typography } from '@mui/material/';
import { useData } from '../../UseContext';
import Rule from './Rule.jsx'

export default function TurnTracker() {
  const { players } = useData();
  return (
    <Typography>
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

