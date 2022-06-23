import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home.jsx';
import Cards from './Cards.jsx';
import { useData } from '../UseContext';
import { Typography, Button, Stack } from '@mui/material';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Library() {
  const { sort, setSort } = useData();

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const container = {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'scroll',
    height: '80vh',
    width: 'fitContent'
  };

  return (
    <div id='library'>
      <Typography variant='h1' id='libraryitle'>Card Library</Typography>
      <Typography component={'div'}>
        <Stack spacing={5} direction='row' className='library' component={'div'}>
          <select name='cardsort' id='cardsort' onChange={handleSort}>
            <option value='oldest' >Oldest</option>
            <option value='newest' >Newest</option>
            <option value='createdby' >Created By</option>
          </select>
          <StyledLink to="/">
            <Button variant='outlined' size='large' id='lib-btn1'>Back to home</Button>
          </StyledLink>
        </Stack>
      </Typography>
      <div style={container} className='library'>
        <Cards />
      </div>
    </div>
  );
}

