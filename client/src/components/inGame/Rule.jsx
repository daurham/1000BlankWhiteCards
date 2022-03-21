import React from 'react';
import styled from "styled-components";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      Write rules here
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