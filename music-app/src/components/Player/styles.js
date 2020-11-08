import styled from "styled-components";

export const Container = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControl = styled.div`
  width: 50%;
  display: flex;

  input {
    width: 100%;
  }

  span {
    padding: 1rem;
  }
`;

export const PlayerControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;

  button {
    cursor: pointer;
    border: 0;
    background: none;
    outline: none;
  }
`;
