import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Home from './Home.jsx'


export default function Library() {
  return (
    <div>
    <h1>Library</h1>
    <Link to="/">Back to home</Link>
    </div>
  )
}

