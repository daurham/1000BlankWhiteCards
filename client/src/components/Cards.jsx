import React from 'react';
import MediaCard from './Card.jsx';
import { useData } from '../UseContext';

const sortFunctions = {
  newest: (a, b) => (new Date(a.dateCreated)) > (new Date(b.dateCreated)) ? -1 : 1,
  oldest: (a, b) => (new Date(a.dateCreated)) < (new Date(b.dateCreated)) ? -1 : 1,
  createdby: (a, b) => a.createdBy < b.createdBy ? -1 : 1,
};

export default function Cards() {
  const { cards, sort } = useData();
  const sorted = [...cards];
  sorted.sort(sortFunctions[sort]);
  return (
    sorted.map((card, key) => <MediaCard card={card} key={key} />)
  );
}
