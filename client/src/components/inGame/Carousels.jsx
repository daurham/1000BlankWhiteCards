import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useData } from '../../UseContext';
import MediaCard from '../Card.jsx';

export default function Carousels() {
  const dummyCardData = useData();
  console.log(dummyCardData.cards, 'dummyCardData.cards in Carousel');
  return(
    <Carousel interval={null}>
      {dummyCardData.cards.map((item) =>
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
