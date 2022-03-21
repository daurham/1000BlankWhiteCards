import React from 'react';
import styled from "styled-components";
import TurnTracker from './TurnTracker.jsx';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.section`
  display: flex;
  background: gray;
  height: 50rem;
  width: 50rem;
  justify-content: center;
  align-items: center;
`;

const Board = styled.section`
  height: 35rem;
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid black;
  background:
    linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
    linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
    white;
`;

const Innerboard = styled.section`
  background: white;
  height: 20rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid black;
`;

export default function GameBoard() {
  return (
    <Container>
      <Background>
        <Board>
          <Innerboard>
            Center
          </Innerboard>
        </Board>
      </Background>
      <TurnTracker />
    </Container>
  );
};