import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './Home';
import Library from './Library';
import InGame from './InGame';
import Lobby from './Lobby';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Game" element={<InGame />} />
      </Routes>
    </Router>
    // <div>
    //   <Home />
    //   <Library />
    //   <Lobby />
    //   <InGame />
    // </div>
  );
};