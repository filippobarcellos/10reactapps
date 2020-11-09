import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: "Lato", sans-serif;
    z-index: 1;
  }

  h3, h4 {
    font-weight: 400;
    color: rgb(100, 100, 100)
  }
`;
