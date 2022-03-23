import React from 'react';
import styled from "styled-components";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
    Play proceeds clockwise beginning with the player on the dealer's left. On each player's turn, he/she draws a card from the central deck and then plays a card from his/her hand. Cards can be played to any player (including the person playing the card), or to the table (so that it affects everyone). Cards with lasting effects, such as awarding points or changing the game's rules, are kept on the table to remind players of those effects. Cards with no lasting effects, or cards that have been nullified, are placed in a discard pile.
    <br/>
    <br/>
    Blank cards can be made into playable cards at any time simply by drawing on them (see structure of a card).
    <br/>
    <br/>
    Play continues until there are no cards left in the central deck and no one can play (if they have no cards that can be played in the current situation). The "winner" is the player with the highest score of total points at the end of the game, though in some games points don't actually matter.
    </Popover.Body>
  </Popover>
);

export default function Rule() {
  return(
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Rules</Button>
    </OverlayTrigger>
  );
}