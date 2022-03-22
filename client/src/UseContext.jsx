import React, { useContext, useState, useMemo, useEffect } from 'react';
import App from './components/App.jsx';
import axios from 'axios';


const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export default function Context() {
  const [positions, getPositions] = useState();
  const [cards, getCards] = useState();

  // useEffect(() => (
  //   axios.get('/positions')
  //     .then((result) => {
  //       const { data } = result;
  //       getPositions(data);
  //     })
  // ), []);



  const dummyCardData = [
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 5 ponts', date: () => new Date(), points: 100, tags: ['pika',], creator: 'Karke', id: 1 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 10009', date: () => new Date(), points: 100, tags: ['pika-pee'], creator: 'Kake', id: 2 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'Point per bunny', date: () => new Date(), points: 1, tags: ['Hamster', 'Bunny'], creator: 'Jini', id: 3 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'Points if youre a dad', date: () => new Date(), points: 1200, tags: ['dad card'], creator: 'Waylon', id: 9 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 103 ponts', date: () => new Date(), points: 1300, tags: ['pika'], creator: 'Alvina', id: 4 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme -1000 ponts', date: () => new Date(), points: 100, tags: ['trap card'], creator: 'Trevor', id: 5 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme -1000 points', date: () => new Date(), points: -1000, tags: ['pika',], creator: 'jake', id: 6 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 0 points', date: () => new Date(), points: 10, tags: ['zero',], creator: 'Karli', id: 7 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 50 points', date: () => new Date(), points: 50, tags: ['test', 'card'], creator: 'kevin', id: 8 },
    { image: 'https://res.cloudinary.com/dgdqzfkbf/image/upload/v1645926277/yfgppek8xixxoryrkjiw.jpg', rules: 'gimme 300*10 points', date: () => new Date(), points: -50, tags: ['test', 'card'], creator: 'ash-Ketchup', id: 10 }
  ];
  const dummyPositionData = [{'a': 'b'}];

  if (!positions && !cards) {
    getCards(() => dummyCardData);
    getPositions(() => dummyPositionData);
  }
  console.log(dummyCardData);

  const value = useMemo(() => ({
    positions, getPositions, cards,
  }), [positions, cards]);

  return !positions && !cards ? null : (
    <DataContext.Provider value={value}>
      <App />
    </DataContext.Provider>
  );
}

