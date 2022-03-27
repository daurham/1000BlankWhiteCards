import { Hand } from 'react-handy';
import { useData } from '../../UseContext';
import React, { useContext, useState, useEffect } from 'react';

const MyComponent = (props) => {
  // define a set of cards
  const cards = props.cards.map((card) => ({ id: card.id, imgSrc: card.image}));

  // add a function to each card that fires onClick
  for (let card of cards) {

    card.handleClick = ({ id, position }) => {
      console.log(`card id: ${id}; position x: ${position.x} y: ${position.y}`)
      console.log(props.bottom)
      console.log(props.top)
      console.log(props.left)
      console.log(props.right)
      console.log(props.center)
      //player
      if (props.bottom) {
        props.handleChange(card, props.player)
        console.log('Move to player')
      }

      //player 2
      if (props.left) {
        props.handleChange(card, props.players[0].name)
      }

      //player 3
      if (props.top) {
        props.handleChange(card, props.players[1].name)
      }

      //player 4
      if (props.right) {
        props.handleChange(card, props.players[2].name)
      }

      //center
      if (props.center) {
        props.handleChange(card, 'center')
      }
    }
  }

  return (
    <Hand cards={cards} />
  )
}

export default MyComponent