import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  :root {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

`;
