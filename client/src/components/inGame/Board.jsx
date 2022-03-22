import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.section`
  display: flex;
  background-color: gray;
  height: 50rem;
  width: 50rem;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 0.1rem solid black;
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
  background-color: white;
  height: 20rem;
  width: 20rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1rem solid black;
`;

const Deck = styled.section`
  background-color: gray;
  height: 17rem;
  width: 8rem;
`;

const Global = styled.section`
  background-color: gray;
  height: 17rem;
  width: 8rem;
`;

export default function GameBoard() {
  return (
    <Container>
      <Background>
        <Board>
          <Innerboard>
            <Deck>Deck</Deck>
            <Global>Global</Global>
          </Innerboard>
        </Board>
      </Background>

    </Container>
  );
};