import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans Regular', Helvetica, Arial, sans-serif;
    font-size: 12;
    -webkit-font-smoothing: antialiased;
    color: #3b4153;
  }

  main {
    margin: 0 20px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  img {
    max-width: 100%;
  }
`;
