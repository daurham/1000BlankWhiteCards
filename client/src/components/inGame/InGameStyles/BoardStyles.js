import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hand = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: center;
`;

export const Board = styled.div`
height: 30vw;
width: 30vw;
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: [row1-start] 1fr
  [row1-end row2-start] 1fr
  [row2-end row3-start] 1fr
  [row3-end row4-start] 1fr
  [row4-end row5-start] 1fr
  [row5-end row6-start] 1fr
  [row6-end row7-start] 1fr
  [row7-end row8-start] 1fr
  [row8-end row9-start] 1fr
  [last-line];
  border: 0.1rem solid rgba(101, 103, 109, 99.5);
  border-radius: 5px;
  background:
    linear-gradient(to top left,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0) calc(50% - 0.8px),
    rgba(101, 103, 109, 0.5) 50%,
    rgba(0,0,0,0) calc(50% + 0.8px),
    rgba(0,0,0,0) 100%),
    linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(101, 103, 109, 0.5) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
      rgba(101, 103, 109, 0.2);
`;

export const Top = styled.div`
  grid-column: 4 / 7;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bottom = styled.div`
  grid-column: 4 / 7;
  grid-row: 7 / 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Left = styled.div`
  grid-column: 1 / 4;
  grid-row: 4 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.div`
  grid-column: 7 / 10;
  grid-row: 4 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Innerboard = styled.div`
  grid-column: 4 / 7;
  grid-row: 4 / 7;
  background-color: rgba(2, 136, 209, 0.2);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1rem solid rgba(2, 136, 209, 0.5);
  border-radius: 5px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Deck = styled.div`
  height: 9rem;
  width: 30%;
  display: table;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  height: 9rem;
  width: 60%;
`;

