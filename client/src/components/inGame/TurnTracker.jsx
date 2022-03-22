import React from 'react';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';

export default function TurnTracker() {
  const users = ['Alvina', 'Jini', 'Trevor', 'Waylon'];
  return(
    <Form.Select aria-label="Default select example">
      <option>User Tracker</option>
      {users.map((user, index) =>
        <option value={user} key={index}>{user}</option>
      )}
    </Form.Select>
  );
}
