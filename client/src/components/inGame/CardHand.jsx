import { Hand } from 'react-handy';
import { useData } from '../../UseContext';
import React, { useContext, useState, useEffect } from 'react';

const MyComponent = (props) => {

  const cards = props.cards.map((card) => ({ id: card.id, imgSrc: card.image }));

  const top = document.getElementById('top');
  const bottom = document.getElementById('bottom');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const center = document.getElementById('center');

  for (let card of cards) {

    card.handleClick = ({ id, position }) => {

      //main player
      if (bottom) {
        let rect = bottom.getBoundingClientRect();

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, props.player)
        }
      }

      //player 2
      if (left) {
        let rect = left.getBoundingClientRect();

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, props.players[0].name)
        }
      }

      //player 3
      if (top) {
        let rect = top.getBoundingClientRect();

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, props.players[1].name)
        }
      }

      //player 4
      if (right) {
        let rect = right.getBoundingClientRect();

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, props.players[2].name)
        }
      }

      //center
      if (center) {
        let rect = center.getBoundingClientRect();

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, 'center')
        }
      }
    };
  }

  // Height represents the distance from a point. Consider it like "margin-top: val"
  return (
    <Hand height={325} cards={cards} />
  );
};

export default MyComponent;