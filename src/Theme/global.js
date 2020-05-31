import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`  
  :root {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    color: ${(p) => p.theme.white};
  }

  html, body, #root {
    position: relative;
    width: 100%;
    
    background-color: ${(p) => darken(0.1, p.theme.secondary)}
  }
  
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  };

`;
