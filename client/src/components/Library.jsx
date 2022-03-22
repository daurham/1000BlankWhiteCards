import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx';
import Cards from './Cards.jsx';

export default function Library() {
  return (
    <div>
    <h1>Library</h1>
    <Cards />
    <Link to="/">Back to home</Link>
    </div>
  )
}

