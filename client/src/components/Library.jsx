import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx';
import Cards from './Cards.jsx';
import { useData } from '../UseContext';

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
    <h1>Library</h1>
    <select name='cardsort' id='cardsort' onChange={handleSort}>
      <option value='oldest' >Oldest</option>
      <option value='newest' >Newest</option>
      <option value='createdby' >Created By</option>
    </select>
    <div style={container}>
      <Cards />
    </div>

    <Link to="/">Back to home</Link>
    </div>
  )
}

