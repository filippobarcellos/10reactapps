import styled from "styled-components";

export const Container = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    cursor: pointer;
    background: transparent;
    border: 2px solid rgb(65, 65, 65);
    padding: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }
`;
