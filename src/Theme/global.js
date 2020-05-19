import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  :root {
    font-family: 'Roboto', sans-serif;
    --primary: #BF1F5A;
    --secondary: #F2F2F2;
    --error: #f44336;
    --warning: #ff9800;
    --info: #2196f3;
    --success: #4caf50;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`;
