import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0 ;
    outline: 0 ;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    background:linear-gradient(90deg, rgb(62, 25, 113),rgb(72, 105, 206));
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  button {
    cursor: pointer;
  }
`;
