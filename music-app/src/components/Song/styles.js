import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background: rgb(222, 222, 255);
    `}

  &:hover {
    background: rgb(222, 222, 255);
  }

  img {
    width: 30%;
  }

  div {
    padding-left: 1rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.7rem;
  }
`;
