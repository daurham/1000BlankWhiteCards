import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useData } from '../../UseContext';
import MediaCard from '../Card.jsx';

export default function Carousels() {
  const { cards } = useData();
  const deck = cards.filter(card => card.position === 'deck');
  console.log(deck, 'deck in Carousel');
  return(
    <Carousel interval={null}>
      {deck.map((item) =>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.image}
            alt="card"
          />
          <Carousel.Caption>
            <p>{item.points}</p>
            <p>{item.rules}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  )
}
