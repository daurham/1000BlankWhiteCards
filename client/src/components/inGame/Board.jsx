import React from 'react';
import styled from "styled-components";
import Carousels from './Carousels.jsx';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 5fr
  [row2-end row3-start] 1fr
  [last-line];
  height: 50rem;
  width: 50rem;
  background-color: gray;
  position: relative;
  border: 0.1rem solid black;
`;

const InnerContainer= styled.div`
  grid-column: 2 / 7;
  grid-row: 2;
`;

const Hand= styled.div`
  grid-column: 4 / 5;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Board = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 1fr
  [row2-end row3-start] 1fr
  [row3-end row4-start] 1fr
  [row4-end row5-start] 1fr
  [last-line];
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

const Top = styled.div`
  grid-column: 3 / 4;
  grid-row: 1;
  display: flex;
  align-items: center;
`;

const Bottom = styled.div`
  grid-column: 3 / 4;
  grid-row: 5;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  grid-column: 1 / 2;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  grid-column: 5 / 6;
  grid-row: 3;
  display: flex;
  align-items: center;
`;

const Innerboard = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 5;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1rem solid black;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Deck = styled.div`
  background-color: gray;
  height: 15rem;
  width: 45%;
`;

const Center = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  height: 15rem;
  width: 45%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  width: 15rem;
  background-color: white;
`;

export default function GameBoard() {
  // const dummyCardData = useData();
  // console.log(dummyCardData.cards, 'dummyCardData.cards');

  const handleDraw = () => {
    console.log('draw');
  };

  return (
    <Container>
      <Background>
        <InnerContainer>
          <Board>

            <Top>
              <Carousels />
            </Top>

            <Left>
              <Carousels />
            </Left>

            <Innerboard>
              <Cards>
                <Deck>Deck</Deck>
                <Center>
                  <Carousels />
                </Center>
              </Cards>
              <Button>
                <button type="submit" onClick={handleDraw}>Draw</button>
              </Button>
            </Innerboard>

            <Right>
              <Carousels />
            </Right>

            <Bottom>
              <Carousels />
            </Bottom>

          </Board>
         </InnerContainer>

          <Hand>
            <Carousels />
          </Hand>
      </Background>
    </Container>
  );
};
