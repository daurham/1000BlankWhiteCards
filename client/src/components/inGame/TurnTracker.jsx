import React from 'react';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import { useData } from '../../UseContext';

export default function TurnTracker() {
  const { players } = useData();
  return(
    <Form.Select aria-label="Default select example">
      <option>User Tracker</option>
      {players.map((player, index) =>
        <option value={player} key={index}>{player.name}</option>
      )}
    </Form.Select>
  );
}
