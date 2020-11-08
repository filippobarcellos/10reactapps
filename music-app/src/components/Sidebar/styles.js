import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 20px rgb(204, 204, 204);

  h2 {
    padding: 2rem;
  }
`;

export const SongsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
