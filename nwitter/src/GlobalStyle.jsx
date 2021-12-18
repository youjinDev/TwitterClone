import { createGlobalStyle } from "styled-components";
import { theme } from "theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${theme.black};
    color: ${theme.white};
  }

  h2, p {
    margin: 0;
  }

`;

export default GlobalStyle;
