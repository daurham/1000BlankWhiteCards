import React, { useContext, useState, useMemo, useEffect } from 'react';
import App from './components/App.jsx';
import axios from 'axios';
import io from 'socket.io-client';
import useLocalStorageState from 'use-local-storage-state'

const socket = io('http://localhost:8080');

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context() {
  const [cards, setCards] = useState();
  const [sort, setSort] = useState();
  const [userName, setUserName] = useLocalStorageState('userName');
  const [players, setPlayers] = useState([]);

  // subscribe to card-list messages from game server
  useEffect(() => {
    const cardListListener = (newCards) => {
      // console.log("card-list", newCards);
      setCards(newCards);
    };

    socket.on('card-list', cardListListener);
    return () => socket.off('card-list', cardListListener);
  }, [])


  useEffect(() => {
    const playersListener = (playerList) => {
      // console.log("player-list", playerList);
      setPlayers(playerList);
    };


    socket.on('player-list', playersListener);
    socket.on('newPlayer', playersListener);
    return () => {
      socket.off('player-list', playersListener);
      socket.off('newPlayer', playersListener);
    };
  }, [players])

  // ask for a cards update
  useEffect(() => socket.emit('get-cards'), []);

  // ask for a players update
  useEffect(() => socket.emit('get-players'), []);

  console.log(userName);
  const value = useMemo(() => ({
    cards, setCards, socket, sort, setSort, setUserName, userName, players, setPlayers,
  }), [cards, sort, userName, players]);

  return !cards || !players ? null : (
    <DataContext.Provider value={value}>
      <App />
    </DataContext.Provider>
  );
}

