import React from 'react'
import { Router } from './router/router'
import { createGlobalStyle } from 'styled-components'
import GlobalState from './global/GlobalState'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif
  }

  body {
    background-color: #daf2da;
    color: black;

  }

  button {
    border: none;
    cursor:pointer;
    padding: 10px;
  }
`

function App() {
  return (
    <div>
      <GlobalState>
        <GlobalStyle/>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
