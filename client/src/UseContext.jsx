import React, { useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import App from './components/App.jsx';
import io from 'socket.io-client';
import useLocalStorageState from 'use-local-storage-state';
import theme from './themeStyles';

const socket = io('http://localhost:8080');

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
};

export default function Context() {
  const [cards, setCards] = useState();
  const [sort, setSort] = useState();
  const [userName, setUserName] = useLocalStorageState('userName');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const cardListListener = (newCards) => {
      setCards(newCards);
    };

    socket.on('card-list', cardListListener);
    return () => socket.off('card-list', cardListListener);
  }, []);


  useEffect(() => {
    const playersListener = (playerList) => {
      setPlayers(playerList);
    };

    socket.on('player-list', playersListener);
    socket.on('newPlayer', playersListener);
    return () => {
      socket.off('player-list', playersListener);
      socket.off('newPlayer', playersListener);
    };
  }, [players]);

  useEffect(() => socket.emit('get-cards'), []);

  useEffect(() => socket.emit('get-players'), []);

  const value = useMemo(() => ({
    cards, setCards, socket, sort, setSort, setUserName, userName, players, setPlayers,
  }), [cards, sort, userName, players]);

  return !cards || !players ? null : (
    <DataContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DataContext.Provider>
  );
};
