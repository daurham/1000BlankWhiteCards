import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx';
import Cards from './Cards.jsx';
import { useData } from '../UseContext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Library() {
  const { sort, setSort } = useData();

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const container = {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'scroll',
    height: '80vh',
    width: 'fitContent'
  }

  return (
    <div>
      <Typography variant='h1' id='libraryitle'>Library</Typography>
      <Typography >
        <Stack spacing={5} direction='row' className='library'>
          <select name='cardsort' id='cardsort' onChange={handleSort}>
            <option value='oldest' >Oldest</option>
            <option value='newest' >Newest</option>
            <option value='createdby' >Created By</option>
          </select>
          <Button variant='outlined' size='large' id='lib-btn1' href="/">Back to home</Button>
        </Stack>
      </Typography>
      <div style={container} className='library'>
        <Cards />
      </div>
    </div>
  )
}

