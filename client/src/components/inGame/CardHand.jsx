import { Hand } from 'react-handy';
import { useData } from '../../UseContext';
import React, { useContext, useState, useEffect } from 'react';

const MyComponent = (props) => {

  // define a set of cards
  const cards = props.cards.map((card) => ({ id: card.id, imgSrc: card.image }));

  const top = document.getElementById('top');
  const bottom = document.getElementById('bottom');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const center = document.getElementById('center');

  // add a function to each card that fires onClick
  for (let card of cards) {

    card.handleClick = ({ id, position }) => {
      // console.log(`card id: ${id}; position x: ${position.x} y: ${position.y}`);

      //main player
      if (bottom) {
        //if elem is truthy, grab its global position
        let rect = bottom.getBoundingClientRect();
        // console.log('left:',rect.left,'right:', rect.right, 'position.x: ', position.x, 'top:', rect.top,'bottom:', rect.bottom, 'positon.y: ', position.y)

        if (position.x > rect.left && position.x < rect.right && position.y > rect.top && position.y < rect.bottom) {
          props.handleChange(card, props.player)
          // console.log('Move to player')
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
    }
  }

  return (
    <Hand height={225} cards={cards} />
  )
}

export default MyComponent