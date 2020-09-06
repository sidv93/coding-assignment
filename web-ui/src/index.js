import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { GlobalProvider } from './context/globalContext';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  *,*:before, *:after {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #F4F7FF;
    border-radius: 4px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #053ED1;
    border-radius: 4px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyles />
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
