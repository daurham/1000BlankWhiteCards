import React from 'react';
import MediaCard from './Card.jsx';
import { useData } from '../UseContext';

export default function Cards() {
  const { cards } = useData();
  return (
      cards.map((card, key) => <MediaCard card={card} key={key} />)
  )
};
