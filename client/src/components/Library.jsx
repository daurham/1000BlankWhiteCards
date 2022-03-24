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
// I think the onchange goes in the select thing
// like this
  return (
    <div>
    <h1>Library</h1>
    <select name='cardsort' id='cardsort' onChange={handleSort}>
      <option value='newest' >Newest</option>
      <option value='oldest' >Oldest</option>
      <option value='createdby' >Created By</option>
    </select>
    {sort === 'createdby' ? (
      <select name='player' id='player'>
        <option value='Alvina'>Alvina</option>
        <option value='Jake'>Jake</option>
        <option value='Jini'>Jini</option>
        <option value='Karli'>Karli</option>
        <option value='Kevin'>Kevin</option>
        <option value='Trevor'>Trevor</option>
        <option value='Waylon'>Waylon</option>
      </select>
        ) : null}
    <Cards />
    <Link to="/">Back to home</Link>
    </div>
  )
}

