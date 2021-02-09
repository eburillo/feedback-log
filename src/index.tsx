import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from './theme'
import App from './App'
import { StoreProvider } from './store'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
}
  body, html {
    margin: 0;
    padding: 0;
  }
  body {
    color: #2e145a;
    font-family: Arial;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
