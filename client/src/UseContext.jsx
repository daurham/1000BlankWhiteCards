import React, { useContext, useState, useMemo, useEffect } from 'react';
import App from './components/App.jsx';
import axios from 'axios';
import io from 'socket.io-client';


const socket = io('http://localhost:8080');

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context() {
  const [positions, setPositions] = useState();
  const [cards, setCards] = useState();

  // subscribe to card-list messages from game server
  useEffect(() => {
    const cardListListener = (newCards) => {
      console.log("card-list", newCards);
      getCards(newCards);
    };

    socket.on('card-list', cardListListener);
    return () => socket.off('card-list', cardListListener);
  }, [])

  // ask for a cards update
  useEffect(() => socket.emit('get-cards'), []);

  const value = useMemo(() => ({
    positions, setPositions, cards, setCards, socket,
  }), [positions, cards]);

  return !positions && !cards ? null : (
    <DataContext.Provider value={value}>
      <App />
    </DataContext.Provider>
  );
}

