import React from 'react';
import MediaCard from './Card.jsx';
import { useData } from '../UseContext';

export default function Cards() {
  const dummyCardData = useData();
  console.log(dummyCardData);
  return (
      dummyCardData.cards.map((card, key) => <MediaCard card={card} key={key} />)
  )
};
