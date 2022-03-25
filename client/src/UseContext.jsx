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
  const [sort, setSort] = useState();
  const [fullLobby, setFullLobby] = useState(false);
  const [userName, setUserName] = useState();
  const [players, setPlayers] = useState([]);
  const [ counter, setCounter ] = useState(0); // counts each player in the game

  // subscribe to card-list messages from game server
  useEffect(() => {
    const cardListListener = (newCards) => {
      console.log("card-list", newCards);
      setCards(newCards);
    };

    socket.on('card-list', cardListListener);
    return () => socket.off('card-list', cardListListener);

  }, [])


  useEffect(() => {
    const playersListener = (playerList) => {
      console.log("player-list", playerList);
      setPlayers(playerList);
      setCounter(playerList.length)
    };
    console.log('context test')

    socket.on('player-list', playersListener);
    return () => socket.off('player-list', playersListener);
  }, [players])

  // ask for a cards update
  useEffect(() => socket.emit('get-cards'), []);

  // ask for a players update
  useEffect(() => socket.emit('get-players'), []);

  const value = useMemo(() => ({
    positions, setPositions, cards, setCards, socket, sort, setSort, fullLobby, setUserName, userName, players, setPlayers, counter, setCounter
  }), [positions, cards, sort, userName, players, counter]);

  return !cards || !players ? null : (
    <DataContext.Provider value={value}>
      <App />
    </DataContext.Provider>
  );
}

