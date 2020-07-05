import { createGlobalStyle } from 'styled-components';
import { config } from '../../config';

const {
  styles: { font },
} = config;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${font.baseFamily};
    font-size: ${font.baseSize};
    -webkit-font-smoothing: antialiased;
    color: ${font.baseColour};
  }

  main {
    margin: 0 20px;
  }

  img {
    max-width: 100%;
  }
`;
