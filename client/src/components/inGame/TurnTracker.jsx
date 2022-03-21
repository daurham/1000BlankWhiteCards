import React from 'react';
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function TurnTracker() {
  const users = ['Alvina', 'Jini', 'Trevor', 'Waylon'];
  return(
    <DropdownButton id="dropdown-basic-button" title="User Tracker">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}


